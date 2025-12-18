@import app.model.DataModel
@param DataModel data

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JTE Test</title>
</head>
<body>
    <form method="POST" action="/">

        <input name="todo" type="text">
        <button>Add</button>
    </form>
    <h3>Response:</h3>
    <p>${data.message}</p>
    
</body>
</html>