# email-templates-flow

Email templates flow helps you to make a markup for your emailing.  

# Getting started 

1. Clone this repo. 
2. Install all dependencies via ``` npm install ```
3. Type ``` gulp ``` to luanch default task. 

# A few words about configuration. 

You have possibility to add new pages in your flow. To make this: 

1. Add new template in src folder. e.g. my_new_page.hbs
2. Go to the gulpfile.js and add following lines in array of pages: 

```
{name:'my_new_page',data:{info: 'Some string'}}
```
3. Reboot gulp 

