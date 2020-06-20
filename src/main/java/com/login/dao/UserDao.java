package com.login.dao;

import com.login.model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao {
    private static final Connection connection = DataBaseConnection.getConnection();
    private static final String selectStatement = "select * from user where emailId=? and password=?";
    private static final String insertStatement = "insert into user values (?, ?, ?);";

    public User createUser(String mailId, String password) {
        try {
            PreparedStatement statement = connection.prepareStatement(selectStatement);
            statement.setString(1, mailId);
            statement.setString(2, password);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return new User(resultSet.getNString("userName"), resultSet.getNString("emailId"),
                                resultSet.getNString("password"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public boolean addUser(String name, String emailId, String password) {
        int result = 0;
        try {
            PreparedStatement statement = connection.prepareStatement(insertStatement);
            statement.setString(1, name);
            statement.setString(2, emailId);
            statement.setString(3, password);
            result = statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result == 1;
    }

}