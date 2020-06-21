package com.login.controller;

import com.login.dao.UserDao;
import com.login.model.User;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/ValidateUser")
public class ValidateUser extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String emailId = request.getParameter("email");
        String password = request.getParameter("password");
        User user = new UserDao().createUser(emailId, password);
        if (user != null) {
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            response.sendRedirect("Profile");
        }
        else
            response.sendRedirect("Home");
    }

}
