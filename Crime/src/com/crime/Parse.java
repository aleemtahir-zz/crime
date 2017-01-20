package com.crime;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;

import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.vocabulary.RDF;


public class Parse {
	private static String uri="http://www.semanticweb.org/hamza/ontologies/2016/11/untitled-ontology-55#";
	private static String newsTitle="";
	private static String News="";
	private static String Date1="";
	private static String Date="";
	private static String location="";
	private static int arrest=0;
	private static int injured=0;
	private static int kill=0;
	/*public void parse2(String name) throws IOException 
	{
		Model model = ModelFactory.createOntologyModel();
		model.read("news.rdf");
		
		String content = null;
		  File file = new File("nums.txt");
	      FileReader fr = null;
	      try {
	          fr = new FileReader(file);
	          char[] chars = new char[(int) file.length()];
	          fr.read(chars);
	          content = new String(chars);
	          fr.close();
	      } catch (IOException e) {
	          e.printStackTrace();
	      } finally {
	          if(fr !=null){fr.close();}
	      }
	      int i;
	      i=Integer.parseInt(content);
	      
		
			CsvReader r=new CsvReader(name);
			r.readHeaders();
			r.readRecord();
			while (r.readRecord())
			{
				Date = r.get("date");
				Date=Date.replaceAll("-.*", "");
				Date1=r.get("date2");
				newsTitle=r.get("news");
				location=r.get("location");
				kill=Integer.parseInt(r.get("killed"));
				injured=Integer.parseInt(r.get("Injured"));
				System.out.println(injured);
				arrest=Integer.parseInt(r.get("arrested"));
			//	System.out.println(r.get("Killed"));
				News=(r.get("type"));
				
				for(int j=0;j<date.length();j++)
				{
					if(date.charAt(j)==' '||date.charAt(j)==',')
					Date=Date+'_';
					else
					Date=Date+date.charAt(j);
				}
				Resource loIns=model.createResource(uri+location);
				Resource NewsIns=model.createResource(uri+"News"+i);
				Resource DateIns=model.createResource(uri+Date);
				Resource class1=model.getResource(uri+"Crime");
				Resource class2=model.getResource(uri+"Location");
				Resource class3=model.getResource(uri+"Date");
				model.add(NewsIns,RDF.type,class1);
				model.add(loIns,RDF.type,class2);
				model.add(DateIns,RDF.type,class3);
				Property prTitle=model.getProperty(uri+"newsTitle");
				Property prOccur=model.getProperty(uri+"occurOn");
				Property inj=model.getProperty(uri+"Injured");
				Property arr=model.getProperty(uri+"Type");
				Property killed=model.getProperty(uri+"Killed");
				Property hl=model.getProperty(uri+"hasLocation");
				Property da=model.getProperty(uri+"Date");
				NewsIns.addLiteral(prTitle, newsTitle);
				NewsIns.addLiteral(inj, injured);
				NewsIns.addLiteral(killed, kill);
				NewsIns.addLiteral(arr, News);
				NewsIns.addLiteral(da, Date1);
				model.add(NewsIns,prOccur,DateIns);
				model.add(NewsIns,hl,loIns);
				i++;
				
				Date="";
				Date1="";
				newsTitle="";
				location="";
				arrest=0;
				kill=0;
				injured=0;
				
			}
			String fileName = "news.rdf"; 
			FileWriter out;
			try 
			{ 
				out = new FileWriter(fileName );
				model.write( out, "RDF/XML" );
				out.close(); 
				
				} 
			catch(IOException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			file = new File("nums.txt");
			out=new FileWriter(file);  	
		  	out.write(String.valueOf(i));
		  	out.close();
		  	
	}*/
	public void parse(String data) 
	{
		Model model = ModelFactory.createOntologyModel();
		int j=0;
		String repeat="";
		model.read("crime.owl");
		int i=0;
		int k=0;
		int flag=0;
		while(data.charAt(i)!='L'||data.charAt(i+7)!='N')
			i=i+1;
		
	for(i=i+11;i<data.length()-25;i++)	
		{
			while(j<50)
			{
				newsTitle=newsTitle+data.charAt(i);
				i++;
				j++;
			}
			while(data.charAt(i)!='@'&&j<200)
			{
			i++;
			j++;
			}
		
		while(data.charAt(i)!='U')
			i--;
		i=i-18;
		while(data.charAt(i)!=' '||data.charAt(i+1)!='U')
		{
			Date=Date+data.charAt(i);
			i=i+1;
		}
		
		while(data.charAt(i)!='p'||data.charAt(i+1)!='s'||data.charAt(i+2)!='t')
		{	
		i=i+1;
		j++;
		if(j==400)
			break;
		}
		i=i+4;
		j=0;
		while(data.charAt(i)!='.'&&i<data.length())
		{
			News=News+data.charAt(i);
			i=i+1;
			j=j+1;
			
		}
		j=0;
		while(data.charAt(i)!='.'||data.charAt(i+2)!='p'||data.charAt(i+3)!='a'||data.charAt(i+4)!='k')
		{
			i++;
			if(i>=data.length())
			{
				i=i-12;
				
			}
		}
		i=i+11;
		System.out.println(newsTitle);
		News="";
		Date="";	
		newsTitle="";
		j=0;
		}
	}
		
	}
/*	public void parse(String data) 
	{
		Model model = ModelFactory.createOntologyModel();
		int j=0;
		String repeat="";
		model.read("crime.owl");
		int i=0;
		int k=0;
		int flag=0;
		
			while(data.charAt(i)!='L'||data.charAt(i+7)!='N')
				i=i+1;
		
		for(i=i+11;i<data.length()-25;i++)	
		{
			list.clear();
		
			for(j=0;j<15;j++)
			{
				while(data.charAt(i)!=' ')
					{
					repeat=repeat+data.charAt(i);
					i++;
					}
			
				if(list.contains(repeat))
				{
					flag++;
					if(flag==3)
					break;
				}
				
				list.add(repeat);
				i=i+1;
				repeat="";
			}
			if(flag==3)
			{
				
				j=0;
			while(j<list.size()-2)
			{
				newsTitle=newsTitle+list.get(j);
				newsTitle=newsTitle+" ";
				j++;
			}
			j=0;
			while(data.charAt(i)!='@'&&j<100)
				{
				i++;
				j++;
				}
			i--;
			while(data.charAt(i)!='U')
				i--;
			i=i-18;
			while(data.charAt(i)!=' '||data.charAt(i+1)!='U')
			{
				Date=Date+data.charAt(i);
				i=i+1;
			}
			
			while(data.charAt(i)!='p'||data.charAt(i+1)!='s'||data.charAt(i+2)!='t')
			i=i+1;
			i=i+4;
			j=0;
			while(data.charAt(i)!='.')
			{
				NewsInfo=NewsInfo+data.charAt(i);
				i=i+1;
				j=j+1;
				if(j==80)
				{	
					NewsInfo=NewsInfo.substring(0, NewsInfo.length()-15);
					i=i-30;
					break;
				}
			}
			
			System.out.println(list);
			}
			NewsInfo="";
			Date="";
			
			newsTitle="";
			repeat="";
			flag=0;
			
		}
		
			
}*/
	