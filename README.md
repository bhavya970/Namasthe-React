This README captures my journey of how my love for Namaste React grew deeper day by day.
# Namasthe React 
# Aim to Build the following HTML In React.Js
   <div id="root">
        <div id="parent">
            <div id="child">
                <h1>I'm h1 tag</h1>
            </div>
        </div>
    </div>

 # React Code by using React.createElement by CDN links:
    const heading = React.createElement("h1",{id:"heading",abc:"xyz "},"Hello World from React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

 # For Siblings :

 const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", { key: "1" }, "I'm H1"),
      React.createElement("h1", { key: "2" }, "I'm H2")
    ]
  )
);   

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

# Parcel [parcel.org]
 - Dev Build :- providing/Developing our app
 - Local Server :- Providing/Hosting our app in server and assigning portNo.
 - HMR = Hot Module Refreshing (Automatically refreshing our page)
 - How is do that ? Parcel uses the File Watching Algorithm -- written in C++
 - Caching -- Faster Builds(Why Reducing time every time because parser builds by using Caching)-- [.parcel-cache]
 - Image Optimization 
 - Minification of our files
 - Bundling
 - Compressing our files
 - Consistent Hashing (Home Work)
 - Code Splitting
 - Differential Bundling - compatibility of older browsers [browser-list]
 - Diagnostic [Appearence of good errors in webpage itself]
 - Error Handling [Suggestions]
 - HTTPs [To host our app on HTTPs (npx parcel index.html -- https)]
 - Tree Shaking [remove un-used code i.e compreesed]
 - Lazy Mode [It wiill load our app in slow/lazy mode(npx parcel index.html -- lazy)]
 - Different dev and prod
 - To build production app [npx parcel build index.html]

# npx : node package execute , execute the package
# Dev vs production

--> Development : It done while building an app [npx parcel index.html]
    -->Features: Fast refresh/hot reload , Detailed error messages
--> Production : It is final , deployed version of our app[npx parcel build index.html] which takes more time
    -->Features: Optimization(tree-shaking,compression) , Minification , React Warnings & logs are removed

# JSX : stands for JavaScript XML extension of Javascript which allows you to write HTML-like syntax code in javascript files
    Because , everytime writing the React.createElement("h1" , {} , "I'm h1"); which is ugly.
    Also we can write js code inside JSX , JSX called as mix of JS + HTML.  
    const jsxHeading = <h1 className="head" tabIndex = "1"> Namasthe React using JSX </h1>
    console.log(jsxHeading) // object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxHeading);


# In Parcel transpiles that JSX code into Javascript code
# Attributes : should be in a camelCase
    Ex : className , tabIndex , etc
# Single Line & Multiple Line Thing 
    Multiple Line thing == > () Ex: (
                                    <h1 className = "head">
                                        Namasthe React
                                    </h1>
                                    );
# React Component:
    2 Types : (1)Class Based Component //older
              (2)Functional Component //new version

# React Functional Component:
    Just a normal function which "returns" some "JSX code" i.e ReactElements or Bunch of RE
    ## Example :-
    const Title = () => (<h1 className = "head">
     Namasthe React using JSX
    </h1>);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Title></Title>);

# Components Composition:
    Component inside a component is called Components Composition.
    ## Example :-
    const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className = "heading">Namasthe Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

# Component Rendering:
   - 3 ways:
     root.render(<Title/>)
     root.redner(<Title></Title>)
     root.render({Title()})

# Normal Functions as Component:
   const Title = function(){
    return (
        <h1 className = "head" tabIndex = "5"> Namasthe React using JSX </h1>
    );
   };

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render({Title()});

# JavaScript inside JSX: 
  -- By using {}
  const number = 1000;
  const HeadingComponent = () => {
    <div id = "container">
        {number}; or <h2>{500+500}</h2>
    <h1 className = "head" > Namasthe React Functional Component </h1>
    </div>
  }
# Note :
   -- We can write inside {} JSXCode

# React Element inside the Component:
   const title = () => {
      <h1 className = "head" > Namasthe React using JSX </h1>
   } //It's just a JS Variable . So we can put it inside {}

   const HeadingComponent = () => {
    <div id = "container">
        {title};
    <h1 className = "head" > Namasthe React Functional Component </h1>
    </div>
  }

# React Element inside React Element:
    const elem = <span> React Element </span>
    const title = () => {
      {elem};
      <h1 className = "head" > Namasthe React using JSX </h1>
    }

# Cross-Site Scripting Prevention:-
    const data = api.getData();
    const title = () => {
      {data};
      <h1 className = "head" > Namasthe React using JSX </h1>
    }

    What If "api" provides "malicious code" ?
       Not possible , because JSX(parcel) takes care of these injection Attacks. JSX will escape , sanitize the code.
       Preventing Cross-Site Scripting.
    
# Higher Order Functions :
    Functions inside functions ,....inside functions are called HOF
    1.map() - to change all values of array
    2.filter() - to filter values from an array
    3.reduce() - take whole array comes up with a single value

    Swiggy App:-
       // Namasthe Food
       1. First Build the UI Plan 
       2. By seeing plan build the react code
       3 .For Every code of React  , we can write in HTML ,CSS ,JS , but with React with less code we can build large scale application

    1.Plan :
        Header 
        Logo
        Nav elements - home aboutus cart
        Body
        Search container
        Restaurent  container
        Restaurant cards 
        Restaurant cards -image , cusine , star rating
        Footer
        copy right , address ,etc links

    - App.js or App.jsx are same , no difference
   
    // Code:-(Done Namasthe Food using Component Compostions , Props)
        View Code :- In drive
    
# Props:
   Props are just like arguments.
   - We can also pass as objects.
   - & access the properties of an objects
# Confict Driven UI:
   - is like the UI driven by confict which is sent by backend
   - The UI is designed based on the backend data
# React File Structure (Better Practices):
   --> Try to name the component file , Just exact of component name "Capital First Letter"
   --> for datasets, URL's as one folder named common , utils  , constants , etc
   --> URL's should be Snake_Case CAPITAL LETTERS
# Exports and Imports :
    There are two types of exports and imports
    # Export :-
        1. Default Export : export default <component name>
        2. Named Export : export const <component function>
    # Import :-
        1. Default Import :  import "compo Name" from "Path"
        2. Nmaed Import : import "{compo name}" from "Path"
# Let's get Hooked :
    
    
    
         

      


 






