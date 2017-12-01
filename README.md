# Arinka  :octocat: :octocat: :octocat:
This responsive website will serve as my submission in the ongoing Fronstack.io responsive website challenge. The challenge is to turn this UI [View website mockup on Figma](https://www.figma.com/file/ewDiOvKnOGYgX2ho7Qr3BfOc/Frontstack-Responsive-Design-Hackathon?node-id=1%3A3) into a fully responsive website.

## Getting Started
Ire Aderinokun:

>1.You must submit your project by 10am on December 1st
>2.We have only provided you with a Desktop design. It's up to >you to convert it to a responsive design that is optimised for mobile as well
>3.You must use Cloudinary to host and serve the responsive images
>4.If you wish to work on this project as a group, you can, but only one person can submit the project and be eligible to win
>5.If you win, you must be available to receive your prize at the next Frontstack meetup in Lagos, Nigeria

### Tips 
Ire Aderinokun:

>1.Think about the content (texts and media). How can you make the content responsive as well? Remember that responsive design is not just about layout.
>2.Mobile first design is preferable to desktop first design
>3.Using frameworks such as Bootstrap is not advised

### Development  :cactus: :cactus:

As instructed I used HTML,CSS & Javascript as my codebase since it was stressed that no responsive framework is allowed

## Running the tests  :collision:

Used [frontendchecklist.io checklist application] (https://frontendchecklist.io/) to ensure I was meticulous. Most of my development was with respect to the checklist, spending time conforming to the best standards.


### Optimizations  :tired_face:

Used Google's [pagespeedtest] (https://developers.google.com/speed/pagespeed/insights/) and a host of different speed test platforms to ensure the site load time was fast.

1. Eliminating render-blocking Javascript and CSS in above-the-fold content
2. Optimized images by rendering them via Cloudinary. Did a lot of reading on this and Cloudinary is the bomb.
3. Avoid landing page redirects.
4. Enable compression.
5. Minified CSS & HTML.
6. Prioritied above-the-fold content.
7. Reduced server response time.
8. Ensured it was accessible for screen readers too.
9. Ensured images were rendered progressively and modifications to images were automatic based on the user's phone on the fly.
10. Used a very low-res image as a placeholder till the original image arrives. [Imitated medium](https://medium.com).
11. In case of poor internet, I also styled the alt text, thus it looks different from the generic one.
*the list goes on and on .... :expressionless:

### Screenshots ###
[360px] (https://res.cloudinary.com/harryola9/q_auto,dpr_auto,w_auto/Arinka1.jpg)
[767px] (https://res.cloudinary.com/harryola9/q_auto,dpr_auto,w_auto/Arinka2.jpg)
[992px] (https://res.cloudinary.com/harryola9/q_auto,dpr_auto,w_auto/Arinka3.jpg)
[1349px] (https://res.cloudinary.com/harryola9/q_auto,dpr_auto,w_auto/Arinka4.jpg)

*P.S: The logo might seem offset and that it's because it is animated :smiling
*Cross section of code demonstrating card images*  :blush:
```<div class="column wow fadeInLeft" data-wow-duration="2s" data-wow-offset="50">
    <div class="card">
        <div class="overlay"></div>
        <div class="card-image"><img alt="Bauchi" class="cld-responsive" data-src="https://res.cloudinary.com/harryola9/w_auto,dpr_auto,c_scale,f_auto,q_auto/bauchi1.jpg" src="img/bauchi.jpg"></div>
        <div class="location">
            <h4>Bauchi Park</h4>
            <p>Relaxed holiday for two.</p>
        </div>
    </div>
</div>
```

### A taste of my stylesheet  :smirk:
```
@media screen and (max-width:767px) {
    .landing .content .title {font-size: 3rem;line-height:50px;}
    .about p {font-size: 1.25rem;}
    .menu-expand > .container-full {
        padding-right: 0;
        padding-left: 0;
    }
    .menu-center {display: none;}
    .sidenav {
        height: 90%;
        width: 0;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background: -webkit-gradient(linear, left top, left bottom, from(#eb5757), to(#d59152));
        background: -webkit-linear-gradient(top, #eb5757 0%, #d59152 100%);
        background: -o-linear-gradient(top, #eb5757 0%, #d59152 100%);
        background: linear-gradient(180deg, #eb5757 0%, #d59152 100%);
        overflow-x: hidden;
        -webkit-transition: .5s;
        -o-transition: .5s;
        transition: .5s;
        padding: 5rem 0rem;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    }
    .sidenav a {
        padding: 1rem .5rem 1rem;
        font-size: .875rem;
        color: #fff;
        text-transform: uppercase;
        display: block;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        font-weight: 900;
    }
    .sidenav a:hover:not(:first-child) {
        background: rgba(255, 255, 255, 0.2);
        -webkit-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
    }
    .mobile-link:before, .mobile-link:after {
        left: 0;
        width: 100%;
        height: 2px;
        background: #fff;
    }
    .mobile-link:before {
        bottom: 0;
        -webkit-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
                transform: translateX(-100%);
    }
    .mobile-link:after {
        top: 0;
        -webkit-transform: translateX(100%);
            -ms-transform: translateX(100%);
                transform: translateX(100%);
    }
    .mobile-link:hover:before, .mobile-link:hover:after {
        -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
                transform: translateX(0);
    }
    .sidenav button {margin: 0 auto;}
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 5%;
        font-size: 2rem;
    }
    .sidenav .closebtn rect:nth-child(1) {display: none;}
    .sidenav .closebtn rect:nth-child(2) {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);transform: rotate(-45deg);}
    .sidenav .closebtn rect:nth-child(2) {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}
    .menu-toggler {
        display: inline-block;
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-right: 1rem;
        font-size: 2rem;
        font-weight: 900;
        line-height: 22px;
        white-space: nowrap;
        cursor: pointer;
        text-transform: uppercase;
        color: #fff;
    }
    .sr-only {position: absolute;
        clip:rect(1px 1px 1px 1px);
    }
    .desktop {display: none;}
}
```


Created github pages for the project. To do that; go to Settings, scroll down a bit and you will see the option.

## Built With

* HTML, CSS & JAVASCRIPT. Images hosted by Cloudinary. No frameworks included.

## Author

* **Jegede Olamide** - *Initial work* - [Red Star Express](https://github.com/jegedeolamide99/Red-Star-Express)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to [Fronstackio] (https://fronstack.io)
* Inspiration, Google, [bitsofcode] (https://bitsofco.de)
* etc
