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

@WebServlet("/Interface")
public class Interface extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ArrayList<String> list1 = new ArrayList<String>();
	ArrayList<Integer> list2 = new ArrayList<Integer>();
	String uri = "test: <http://www.semanticweb.org/hamza/ontologies/2016/11/untitled-ontology-55#>";
    public Interface() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");

		/*out.flush();
		String query=null;
		query=request.getParameter("inbox");
		
		list =Insert.tokens(query);
		list = Insert.Analize2(list);*/
		
		
	//	ArrayList list = com.crime.Connection.execSelectAndPrint(queryString);
		//out.print(list);
		//ResultSetFormatter.out(System.out, rs);
		
		
		
		//Graph1 
		String query= null;
		String param1 = "?region";
		String param2 = "?count";		
		String data = request.getParameter("param");
		
		
		query = "prefix " + uri +
				"select  ?region (count(?x) as ?count) where  { " + 
				"?x test:hasLocation ?region. } "+
				"GROUP BY ?region "+
				"order by desc(?count) limit 10";
				
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

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		request.getRequestDispatcher("crime.jsp").forward(request, response);
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
