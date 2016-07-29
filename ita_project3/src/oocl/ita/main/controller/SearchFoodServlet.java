package oocl.ita.main.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import oocl.ita.main.model.Food;
import oocl.ita.main.service.SearchService;
import oocl.ita.main.service.impl.SearchServiceImpl;

/**
 * Servlet implementation class SearchFoodServlet
 */
public class SearchFoodServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchFoodServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		SearchService searchService = new SearchServiceImpl();
		List<Food> foodList = searchService.searchAllFood();
		ObjectMapper mapper = new ObjectMapper();
		String foodJson = mapper.writeValueAsString(foodList);
		System.out.println(foodJson);
		response.setContentType("text/xml;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter writer = response.getWriter();
		writer.println(foodJson);
	}

}
