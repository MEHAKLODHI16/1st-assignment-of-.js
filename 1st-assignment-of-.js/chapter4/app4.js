// Select the content div
const contentDiv = document.getElementById("content");
// Set the HTML content
contentDiv.innerHTML = ` 
    <h3>Declare 3 variables in one statement:</h3>
    <pre><code>let myName, <br>age, <br>grade;</code></pre>

    <h3>Declare 5 legal and 5 illegal variable names:</h3>
    <h4>Legal variables</h4>
    <pre><code>let name, _name, $name, myVariable, helloWorld;</code></pre>

    <h4>Illegal variables</h4>
    <code><pre>let 1stVariable, @symbol, #hash, *star, ?question; </code></pre>

    <h2>Variable names can only contain:</h2>
    <ul>
        <li>letters</li>
        <li>digits</li>
        <li>underscores (_)</li>
        <li>dollar signs ($)</li>
    </ul>
    <p>For example: $my_1stVariable</p>

    <h3>Variables must begin with:</h3>
    <ul>
        <li>a letter</li>
        <li>underscore (_)</li>
        <li>dollar sign ($)</li>
    </ul>
    <p>For example: $name, _name, or name</p>

    <h3>Variable names are:</h3>
    <ul>
        <li>case sensitive</li>
    </ul>

    <h3>Variable names should not be:</h3>
    <ul>
        <li>JavaScript keywords</li>
    </ul>
`;
