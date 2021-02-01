# Proiect DAW
 
 ## BackEnd
 
Developed using .NET Core 3.1 and MongoDB
MongoDB is running on a remote cluster at: https://cloud.mongodb.com/v2/6012d85860c9163eeeba4fa6#clusters
Requirements: .NET Core 3.1 installed.
Use Visual Studio for coding.

To run it:
-Using Visual Studio: Open the solution -> select IIS profile -> Run the project -> open https://localhost:44395/api/notes
-Using the console: Go into the folder where the .csproj file is located -> open terminal -> dotnet run -> open https://localhost:5001/api/notes
 
## FrontEnd

Developed using Angular.

Requirements: Node.Js and Angular CLI.
Use Visual Code if you wish to change the code.

To run it:
Go into the main folder -> Open terminal -> Run commands in order:
  npm i
  from the app/note.service filter change the url of the backend service if needed. It will make requests on https://localhost:44395 by default.
  npm start
  open a browser at http://localhost:4200/
