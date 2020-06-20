<!DOCTYPE html>
<html>

<head>
    <title>Sign up</title>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="home.js"></script>
</head>

<header>
    <div>
        <h1>WELCOME</h1>
    </div>
    <div><a href="Home">Log in</a></div>
</header>

<main>
    <div id="signup">
        <form method="POST" action="AddUser">
            <h2>SIGNUP</h2>
            <div class="form-input"><input type="text" name="firstName" placeholder="first name" class="form-input-field" required></div>
            <div class="form-input"><input type="text" name="lastName" placeholder="last name" class="form-input-field"></div>
            <div class="form-input"><input type="email" name="email" placeholder="Email" class="form-input-field" required></div>
            <div class="form-input"><input type="password" name="password" placeholder="Password" class="form-input-field" required></div>
            <div class="form-input"><input type="submit" value="submit" class="form-submit-button"></div>
        </form>
    </div>
</main>

</html>