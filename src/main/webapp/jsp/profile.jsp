<%@ page import="com.login.model.User" %>
<!DOCTYPE html>
<html>

<head>
     <title>Profile</title>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/styles.css">
</head>

<body>
    <%
        User user = (User) session.getAttribute("user");
        if (user == null)
            response.sendRedirect("Home");
    %>

    <header>
        <div>
            <h1>WELCOME</h1>
        </div>
        <div>
            <div><button onclick="logOut()" class="logout-button">Log out</button></div>
        </div>
    </header>

    <main>

    </main>

</body>

</html>