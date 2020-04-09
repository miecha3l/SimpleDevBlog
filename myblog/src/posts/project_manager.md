# Idea behind project manager
First thing we do when we want to start up brand new project is the idea, then comes creating new folder as repository for our project.  
Most of us, programmers have dedicated directory on their disk reserved for projects. As you develop more and more, creating those directories becomes tedious process. We tend to forget about the order and end up with projects all over our drive. Moreover it takes many clicks/commands to set everything up. Humans are lazy. Humans don't like doing repetetive tasks. We just want to jump into our editor and **start creating**.  
  
  
Here project_manager comes in for the rescue! It's simple console tool created by me in python which does all of *folder creating* and *keeping order* for you. All you need to do is fire up your shell and type in one command. As simple as that.  
Let's assume you create mainly in javascript and python. You come up with and idea, and want to jump straight into coding part. With project_manager
workflow goes like this:  
* fire up your shell
* `pm {my_cool_project_name} {grouping_category}`  
  

*Voilà!* This one command gets you this:
```
root
    |
    |- {grouping_category} (folder wher all related projects are going to be stored)
        |
        | - {my_cool_project_name} (repository folder)
            |
            | - .git (optional)
            | - readme.md (optional)
            | - {my_cool_project_name} (project root, here goes all the code stuff)
```
  

This is only the most simple use of project_manager, and it can do **much** more. In config file you can specify many diffrent schemas that you
can append to this base structure based on project needs. You can also instantly fire up visual studio code or file explorer in your brand new
repository with additional parameter.  
  
If you're interested in using it just visit [project repository](https://github.com/miecha3l/project_manager) on github :)  
  
See you next time!
