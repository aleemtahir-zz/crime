package com.crime;

import java.awt.AWTException;
import java.io.FileNotFoundException;
import java.io.IOException;


public class Main {
		private static String data=null;
	public static void main(String[] args) throws AWTException, InterruptedException, IOException 
	{
		String url=null;
		int i=0;
	//	url="https://www.geo.tv/latest-news/";
		url="LatestNewsgeo.tv.htm";
		Crawl c=new Crawl();
		c.news2(url);
		c.parse();

	}
	

}
