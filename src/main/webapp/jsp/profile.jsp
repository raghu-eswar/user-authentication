<%@ page import="com.login.model.User" %>
<!DOCTYPE html>
<html>

<head>
    <title>Profile</title>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/styles.css">
</head>

<body>
    <%
        response.setHeader("Cache-Control", "no-store");
        User user = (User) session.getAttribute("user");
        if (user == null)
            response.sendRedirect("Home");
    %>

    <header>
        <div>
            <h1>WELCOME</h1>
        </div>
        <div>
           <div><a href="LogOut">Log out</a></div>
        </div>
    </header>

    <main>

    </main>

</body>

</html>