package com.login.controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/ValidateUser")
public class ValidateUser extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String emailId = request.getParameter("email");
        String password = request.getParameter("password");

        if (emailId.equals("raghu@mail.com") && password.equals("raghu"))
            response.sendRedirect("Home");
        else
            response.sendRedirect("Login");
    }
}
