package com.crime;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jena.atlas.json.JsonArray;
import org.apache.jena.atlas.json.JsonObject;

/**
 * Servlet implementation class reportServlet
 */
@WebServlet("/reportServlet")
public class reportServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	ArrayList<String> list1 = new ArrayList<String>();
	ArrayList<Integer> list2 = new ArrayList<Integer>();
	String uri = "test: <http://www.semanticweb.org/hamza/ontologies/2016/11/untitled-ontology-55#>";
    public reportServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		try{
			String param = request.getParameter("param");
			if(!(param.equals(null))){
				loadPage(request, response);
			}
			else{	
				doPost(request, response);
				}
			}
			catch(Exception e){
				doPost(request, response);
			}

		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		request.getRequestDispatcher("report.jsp").forward(request, response);
	}

	private void loadPage(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String query= null;
		String param1 = null;
		String param2 = null;		
		
		String method = request.getParameter("param");
		if(method.equals("graph1")){
			param1 = "?region";
		    param2 = "?count";	
			query = "prefix " + uri +
					"select ?region (count(?x) as ?count) where {  " + 
					"?x test:Killed ?k. "+
					"?x test:hasLocation ?region } "+
					"GROUP BY ?region "+
					"order by desc(?count) limit 10";
			
			makeGraph(request,response,query,param1,param2);
			}
	    else if (method.equals("graph2")){
	    	param1 = "?region";
		    param2 = "?count";	
			query = "prefix " + uri +
					"select ?region (sum(?k) as ?count) where {  " + 
					"?x test:Killed ?k. "+
					"?x test:hasLocation ?region } "+
					"GROUP BY ?region "+
					"order by desc(?count) limit 10";
			
			makeGraph(request,response,query,param1,param2);
		    
	        }
	    else if (method.equals("graph3")){
	    	param1 = "?region";
		    param2 = "?count";	
			query = "prefix " + uri +
					"select ?region (sum(?k) as ?count) where {  " + 
					"?x test:Injured ?k."+
					"?x test:hasLocation ?region } "+
					"GROUP BY ?region "+
					"order by desc(?count) limit 10";
			
			makeGraph(request,response,query,param1,param2);
		    
	        }
	    else if (method.equals("graph4")){
	    	param1 = "?region";
		    param2 = "?count";	
			query = "prefix " + uri +
					"select ?region (count(?x) as ?count) where {  " + 
					"?x test:newsTitle ?y. "+					
					"?x test:hasLocation ?region. "+
					"FILTER(regex(?y, 'fraud')). }"+
					"GROUP BY ?region order by desc(?count)";
			
			makeGraph(request,response,query,param1,param2);
		    
	        }
	    else if (method.equals("graph5")){
	    	param1 = "?region";
		    param2 = "?count";	
		    query = "prefix " + uri +
					"select ?region (count(?x) as ?count) where {  " + 
					"?x test:newsTitle ?y. "+					
					"?x test:hasLocation ?region. "+
					"FILTER(regex(?y, 'accident')). }"+
					"GROUP BY ?region order by desc(?count)";
			
			makeGraph(request,response,query,param1,param2);
		    
	        }
	    else if (method.equals("graph6")){
	    	param1 = "?region";
		    param2 = "?count";	
		    query = "prefix " + uri +
					"select ?region (count(?x) as ?count) where {  " + 
					"?x test:newsTitle ?y. "+					
					"?x test:hasLocation ?region. "+
					"FILTER(regex(?y, 'attack')). }"+
					"GROUP BY ?region order by desc(?count) limit 10";
			
			makeGraph(request,response,query,param1,param2);
		    
	        }
	}

	
	private void makeGraph(HttpServletRequest request, HttpServletResponse response, String query, String param1, String param2) throws ServletException, IOException {
	
		try {
			RowObject obj = graphQuery.getObject(query, param1, param2);
			list1 = obj.getList1();
			list2 = obj.getList2();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		makeJSON(request, response, list1, list2);
		
	}



	public void makeJSON(HttpServletRequest request, HttpServletResponse response, ArrayList<String> list1, ArrayList<Integer> list2) throws ServletException, IOException
	{
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		JsonObject json = new JsonObject();
		JsonArray xAxis = new JsonArray();
		JsonArray yAxis = new JsonArray();
		
		for(int i=0; i<list1.size(); i++)
		{
			xAxis.add(list2.get(i));
			yAxis.add(list1.get(i));
			
		}
		
		json.put("xAxis", xAxis);
		json.put("yAxis", yAxis);
		out.print(json);
	}

}
