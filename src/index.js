import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
const ran = "https://picsum.photos/200";
ReactDom.render(
  <div>
      <h1 className="try">Hello</h1>,
      <ul>
          <li>TOC</li>
       </ul>,
       <div>
            <img src="https://www.sharmispassions.com/wp-content/uploads/2014/11/SchezwanFriedRice5.jpg" />
            <img src="https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg" />
            <img src="https://lh3.googleusercontent.com/proxy/XWraYwonqMSUjIWytmToMWv6FmOogSyEJIE4xGKa3n-fctdn7ejfqO0DsbGWp_WXastzvTunokYXmzGh8tBmeyRDpXb5jaW56vvE3ExQ9CY3EOm4SBtH437VnNW05yzARkLYRQ" />
            <img src={ran + "?grayscale"} />
        </div>
   </div>,
  document.getElementById("root")
);
