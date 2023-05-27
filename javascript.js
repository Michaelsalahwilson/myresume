var txt = `
<p>I created this resume website as training for my frontend web developing skilling using HTML, CSS and JavaScript, and also can use it to get an opportunity working as a frontend web developing.</p>
    </br><p>Throughout my resume you can notice that I am trying to do my best to get better career to suit my skills and mindset. 
</p></br>
`;
var personaldetails = `
    <ul>
  <li><b>Nationality:</b> Egyptian</li>
  <li><b>Mobile:</b> +201007015953</li>
  <li><b>Email:</b> michael_s.wilson@ymail.com</li>
  <li><b>Birth Date:</b> 11 December 1985</li>
  <li><b>Marital Status:</b> Single</li>
  <li><b>Religion:</b> Christian</li>
  <li>
  <b>Address:</b> no.5 Altarbia altaleem st. from Al hilaly st, Assiut, Egypt
  </li>
  </ul>
`;
var languages = `<ul>
<li><b>Arabic</b> - Native Language</li>
<li><b>English</b> - Very Good</li></ul>
`;
var skills = `Microsoft Excel, Word, PowerPoint Outlook. Photoshop. Fast Learning Any
Software Self-motivation Work under pressure Multi Tasks Leadership
skills Teamwork`;

var experiance = `<h4>Store In-Charge | Retail Sales | Customer Service</h4>
<h4>
  Plus Express LLC (Dubai, Alain, Abu Dhabi, UAE) June 2020 - June 2022
</h4>
<ul>
  <li>
    Selling online through various applications (Instashop, Elgrocer,
    Swan, Talabat, Noon, Amazon, and WhatsApp).
  </li>
  <li>Updating Stock and prices on system and applications.</li>
  <li>
    Recording and sending all details needed and daily sales reports.
  </li>
  <li>
    Controlling cash and store expenses. Inventory Controller and purchase
    for all needed stock.
  </li>
</ul>
</br>
<h4 class="workExp">Admin, Accountant Assistant | Cashier</h4>
<h4>Café Bubble Lounge (Dubai, UAE) June 2016 - June 2020</h4>
<ul>
  <li>
    Greet and assist visitors, taking orders and directing them to
    appropriate personnel.
  </li>
  <li>Produced and distributed invoices and financial documents.</li>
  <li>Documented business expenses and sales.</li>
  <li>Balanced reports submitting for approval and verification.</li>
  <li>Preparing month-end, quarterly, and year-end closings.</li>
</ul>
</br>
<h4 class="workExp">Sales Representative</h4>
<h4>United Group (Assiut, Egypt) July 2015 - May 2016</h4>
<ul>
  <li>Inform and support staff on media and marketing outcomes.</li>
  <li>
    Compiled product, market, and customer data to forecast accurate sales
    and profit projections.
  </li>
</ul>
</br>
<h4 class="workExp">Medical Representative</h4>
<h4>Al Nahar Hearing Aids (Assiut, Egypt) June 2013 - June 2015</h4>
<ul>
  <li>
    Arrange appointments with doctors, pharmacists, and medical teams to
    raise awareness of the latest product launches.
  </li>
  <li>
    Follow up with customers after completed sales to assess satisfaction
    and resolve any technical or service concerns.
  </li>
  <li>Performing audiometry, molding, and adjusting devices</li>
</ul>
</br>
<h4 class="workExp">Reserve officer</h4>
<h4>Egyptian Armed Force (Suez, Egypt) October 2010 - March 2013</h4>
<ul>
  <li>Administration Officer and Team leader.</li>
</ul>
</br>
<h4 class="workExp">Salesman</h4>
<h4>
  Ashraf Sophy Jewelry Shop (Assiut, Egypt) July 2008 - September 2010
</h4>
<ul>
  <li>Approaching potential clients, offering advice.</li>
  <li>
    Helping hesitant customers make a decision, closing sales, preventing
    store thefts, and reporting to upper management.
  </li>
</ul>`;

var education = `<b>Bachelor of Physics and Electronics</b> 2009, Faculty of Science, Assiut
University`;

var courses = `<ul>
<li><b>JavaScript</b> – April 2023</li>
<li><b>SQL</b> – December 2022</li>
<li><b>HTML/CSS</b> – November 2022</li>
<li><b>Photoshop, Network, HR IC3 Preparation</b>– June 2015</li>
<li><b>Computer maintenance</b> - November 2010</li>
<li><b>ICDL (International Computer Driving License)</b> – March 2010</li>
</ul>`;

var hobbies = `<p>Internet surfing and Searching
Drawing, Sketching and Painting,
Travelling, Reading</p>
`;

const list = [
  txt,
  personaldetails,
  experiance,
  education,
  courses,
  languages,
  skills,
  hobbies,
];

function fun() {
  if (document.getElementById("Button1").checked) {
    document.getElementById("article").innerHTML = txt;
  } else if (document.getElementById("Button2").checked) {
    document.getElementById("article").innerHTML = personaldetails;
  } else if (document.getElementById("Button3").checked) {
    document.getElementById("article").innerHTML = experiance;
  } else if (document.getElementById("Button4").checked) {
    document.getElementById("article").innerHTML = education;
  } else if (document.getElementById("Button5").checked) {
    document.getElementById("article").innerHTML = courses;
  } else if (document.getElementById("Button6").checked) {
    document.getElementById("article").innerHTML = languages;
  } else if (document.getElementById("Button7").checked) {
    document.getElementById("article").innerHTML = skills;
  } else if (document.getElementById("Button8").checked) {
    document.getElementById("article").innerHTML = hobbies;
  }
}
