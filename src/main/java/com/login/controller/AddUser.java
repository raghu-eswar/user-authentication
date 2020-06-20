package com.login.controller;

import com.login.dao.UserDao;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/AddUser")
public class AddUser extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String emailId = request.getParameter("email");
        String password = request.getParameter("password");
        boolean status = new UserDao().addUser(firstName.toUpperCase() +" "+ lastName.toUpperCase(), emailId, password);
        if (status)
            response.sendRedirect("Home");
        else
            response.sendRedirect("SignUp");

    }
}
