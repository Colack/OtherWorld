var url = getAttribute('divApplab', 'baseURI');
var src = url.substring(0, 83);
var source = "https://raw.githubusercontent.com/Colack/OtherWorld";
var passwordManager = null;
if (!(url.indexOf('view') > -1 || url.indexOf('edit') > -1)) {
    setStyle("divApplab", "\n    background-color: black; \n    position: fixed; \n    top: 0px; \n    left: 0px; \n    width: 100%; \n    height: 100%; \n    z-index: 10000; \n    background-image:url('https://thumbs.gfycat.com/ImpressiveDrearyEagle-size_restricted.gif');\n    background-position: center;\n    background-size: cover;\n    ");
}
else {
    setStyle("divApplab", "\n    background-color: black; \n    ");
}
deleteElement("screen1");
innerHTML("divApplab", "\n<h1 style=\"font-size:10vh; background-color: grey; color: orange; border: 10px solid gray; box-sizing: border-box; margin-top: 0px; text-align: center;\">\nOtherWorld\n<!-- Menu Buttons-->\n <p style=\"text-align: center; padding-top: 2vh; align-items: center\">\n  <button style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">Home</button>\n  <button style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">About</button>\n  <button style=\"font-size: 20px; border-radius: 20px; width: 25%; height: 50px;\">Legal</button>\n </p>\n</h1>\n<!-- <img src=\"https://thumbs.gfycat.com/ImpressiveDrearyEagle-size_restricted.gif\" style=\"position: fixed; top: 0px\"><img> -->\n<p style=\"text-align: center\">\n <label style=\"color: white; font-size: 25px\">Username:</label>\n <input type=\"text\" id=\"username\" name=\"username\" style=\"font-size: 25px; width:50%; height:10%\"><br></input>\n <label style=\"color: white; font-size: 25px\">Password:</label>\n <input id=\"password\" name=\"password\" style=\"font-size: 25px; width: 50%; height: 10%\"><br>\n </input>\n</p>\n<div style=\"display: flex; justify-content: center;\">\n <a href=".concat(src, "?screen=\"home\">\n  <button id=\"signup\" style=\"font-size: 30px; width: 60vw; justify-content: center; margin: 0 auto\">Sign Up</button>\n </a>\n</div>\n<p style=\"color:white\">Welcome!<br />This site is a work in progress.</p>\n"));
startWebRequest("".concat(source, "/main/Lib/extentions.ts"), function (s, t, d) {
    if (s === 200 && t === 'text/plain') {
        eval(d);
        passwordManager = new PasswordBox("password", "");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sTUFBTSxHQUFHLHFEQUFxRCxDQUFDO0FBQ3JFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN6RCxRQUFRLENBQUMsV0FBVyxFQUFFLDZUQVdyQixDQUFDLENBQUM7Q0FDTjtLQUFNO0lBQ0gsUUFBUSxDQUFDLFdBQVcsRUFBRSx1Q0FFckIsQ0FBQyxDQUFDO0NBQ047QUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekIsU0FBUyxDQUFDLFdBQVcsRUFBRSx3cUNBbUJaLEdBQUcsOE9BS2IsQ0FBQyxDQUFDO0FBQ0gsZUFBZSxDQUFDLFVBQUcsTUFBTSw0QkFBeUIsRUFBRSxVQUFDLENBQWdCLEVBQUUsQ0FBUyxFQUFFLENBQU07SUFDcEYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxZQUFZLEVBQUU7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsZUFBZSxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXJsID0gZ2V0QXR0cmlidXRlKCdkaXZBcHBsYWInLCAnYmFzZVVSSScpO1xuY29uc3Qgc3JjID0gdXJsLnN1YnN0cmluZygwLCA4Myk7XG5jb25zdCBzb3VyY2UgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db2xhY2svT3RoZXJXb3JsZFwiO1xubGV0IHBhc3N3b3JkTWFuYWdlciA9IG51bGw7XG5pZiAoISh1cmwuaW5kZXhPZigndmlldycpID4gLTEgfHwgdXJsLmluZGV4T2YoJ2VkaXQnKSA+IC0xKSkge1xuICAgIHNldFN0eWxlKFwiZGl2QXBwbGFiXCIsIGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB0b3A6IDBweDsgXG4gICAgbGVmdDogMHB4OyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB6LWluZGV4OiAxMDAwMDsgXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vdGh1bWJzLmdmeWNhdC5jb20vSW1wcmVzc2l2ZURyZWFyeUVhZ2xlLXNpemVfcmVzdHJpY3RlZC5naWYnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBgKTtcbn0gZWxzZSB7XG4gICAgc2V0U3R5bGUoXCJkaXZBcHBsYWJcIiwgYFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcbiAgICBgKTtcbn1cblxuZGVsZXRlRWxlbWVudChcInNjcmVlbjFcIik7XG5pbm5lckhUTUwoXCJkaXZBcHBsYWJcIiwgYFxuPGgxIHN0eWxlPVwiZm9udC1zaXplOjEwdmg7IGJhY2tncm91bmQtY29sb3I6IGdyZXk7IGNvbG9yOiBvcmFuZ2U7IGJvcmRlcjogMTBweCBzb2xpZCBncmF5OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW4tdG9wOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcIj5cbk90aGVyV29ybGRcbjwhLS0gTWVudSBCdXR0b25zLS0+XG4gPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAydmg7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIj5cbiAgPGJ1dHRvbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgd2lkdGg6IDI1JTsgaGVpZ2h0OiA1MHB4O1wiPkhvbWU8L2J1dHRvbj5cbiAgPGJ1dHRvbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgd2lkdGg6IDI1JTsgaGVpZ2h0OiA1MHB4O1wiPkFib3V0PC9idXR0b24+XG4gIDxidXR0b24gc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IHdpZHRoOiAyNSU7IGhlaWdodDogNTBweDtcIj5MZWdhbDwvYnV0dG9uPlxuIDwvcD5cbjwvaDE+XG48IS0tIDxpbWcgc3JjPVwiaHR0cHM6Ly90aHVtYnMuZ2Z5Y2F0LmNvbS9JbXByZXNzaXZlRHJlYXJ5RWFnbGUtc2l6ZV9yZXN0cmljdGVkLmdpZlwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyB0b3A6IDBweFwiPjxpbWc+IC0tPlxuPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cbiA8bGFiZWwgc3R5bGU9XCJjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMjVweFwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHN0eWxlPVwiZm9udC1zaXplOiAyNXB4OyB3aWR0aDo1MCU7IGhlaWdodDoxMCVcIj48YnI+PC9pbnB1dD5cbiA8bGFiZWwgc3R5bGU9XCJjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMjVweFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gPGlucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjVweDsgd2lkdGg6IDUwJTsgaGVpZ2h0OiAxMCVcIj48YnI+XG4gPC9pbnB1dD5cbjwvcD5cbjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiA8YSBocmVmPSR7c3JjfT9zY3JlZW49XCJob21lXCI+XG4gIDxidXR0b24gaWQ9XCJzaWdudXBcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgd2lkdGg6IDYwdnc7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW46IDAgYXV0b1wiPlNpZ24gVXA8L2J1dHRvbj5cbiA8L2E+XG48L2Rpdj5cbjxwIHN0eWxlPVwiY29sb3I6d2hpdGVcIj5XZWxjb21lITxiciAvPlRoaXMgc2l0ZSBpcyBhIHdvcmsgaW4gcHJvZ3Jlc3MuPC9wPlxuYCk7XG5zdGFydFdlYlJlcXVlc3QoYCR7c291cmNlfS9tYWluL0xpYi9leHRlbnRpb25zLnRzYCwgKHM6IHN0cmluZ3xudW1iZXIsIHQ6IHN0cmluZywgZDogYW55KSA9PiB7XG4gICAgaWYgKHMgPT09IDIwMCAmJiB0ID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgICAgZXZhbChkKTtcbiAgICAgICAgcGFzc3dvcmRNYW5hZ2VyID0gbmV3IFBhc3N3b3JkQm94KFwicGFzc3dvcmRcIiwgXCJcIik7XG4gICAgfVxufSkiXX0=
