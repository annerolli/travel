


const nav_list = document.querySelectorAll('a[href*="#"]');
for(let link of nav_list) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const nav_link = link.getAttribute('href').slice(1);

        document.getElementById(nav_link).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}


const btn = document.getElementById("footer_control");
const link = document.getElementById("theme-link");
const control = document.querySelector('.control_checkbox');

btn.addEventListener("mousedown", function ChangeTheme()
{
    let lightTheme = "./style/ligth.css";
    let darkTheme = "./style/dark.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "ligth";
    }

    link.setAttribute("href", currTheme);
});