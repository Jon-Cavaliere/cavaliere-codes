<?php
$response_success = "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta name=\"keywords\" content=\"Porftolio, Creative, Developer, Programmer, Java, C++, Python, Hire\">
        <meta name=\"description\" content=\"Creative developer and programmer portfolio\">
        <meta name=\"author\" content=\"Jonathan Cavaliere\">
        <meta charset=\"UTF-8\">
        <title>Jonathan Cavaliere | Creative Dev. |</title>
        <link href=\"../../css/contact.css\" rel = \"stylesheet\" type = \"text/css\">
        <script src=\"../../scripts/nav_bar_menu.js\" defer></script>
    </head>
    <body>
        <header>
        <div id = \"email_bar\"><a class = \"email_link\" href = \"mailto:jon@cavaliere.codes\"><img id = \"email_icon\" src = \"..\..\images/icons8-email-64.png\" alt = \"Email Icon\"> <strong>Email:</strong> Jon@Cavaliere.codes </a></div>
                <nav class=\"navbar\">
                    <div class =\"nav_bar_left\">Jonathan Cavaliere&nbsp;|&nbsp;<span id=\"creative_dev\">Creative Dev.</span>&nbsp;|</div>
                    <a href=\"#\" class=\"toggle_menu\">
                        <span class=\"line\"></span>
                        <span class=\"line\"></span>
                        <span class=\"line\"></span>
                    </a>
                    <div class =\"nav_bar_right\">
                        <ul>
                            <li><a href = \"../../index.html\">Home</a> </li>
                            <li><a href = \"../../about-me.html\">About</a> </li>
                            <li><a href = \"../../portfolio.html\">Past Work</a> </li>
                            <li><a href = \"../../education.html\">Education</a> </li>
                            <li class=\"last_link active_page\"><a href = \"../../contact.html\">Contact</a> </li>
                        </ul>
                    </div>    
                </nav>
        </header>
           
        <div>
            <img id=\"banner_img\" src = \"../../images/banner_contact.png\" alt=\"Banner image\">
        </div>

        <section class=\"contact_form\">
            <h2>Message Sent</h2>
            <h3>Thanks For Reaching Out!</h3>
            <h4>You can expect a response within 48 hours</h4>            
        </section> 
        
    </body>
</html>";

$response_captcha = "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta name=\"keywords\" content=\"Porftolio, Creative, Developer, Programmer, Java, C++, Python, Hire\">
        <meta name=\"description\" content=\"Creative developer and programmer portfolio\">
        <meta name=\"author\" content=\"Jonathan Cavaliere\">
        <meta charset=\"UTF-8\">
        <title>Jonathan Cavaliere | Creative Dev. |</title>
        <link href=\"../../css/contact.css\" rel = \"stylesheet\" type = \"text/css\">
        <script src=\"../../scripts/nav_bar_menu.js\" defer></script>
        <script src=\"https://www.google.com/recaptcha/api.js\"></script>
    </head>
    <body>
        <!--
            Top Email Bar has an email icon, email text in bold, and my email address (SHOULD stay on the screen even when scrolled down)
        -->
        <header>
            <div id = \"email_bar\"><a class = \"email_link\" href = \"mailto:jon@cavaliere.codes\"><img id = \"email_icon\" src = \"../../images/icons8-email-64.png\" alt = \"Email Icon\"> <strong>Email:</strong> Jon@Cavaliere.codes </a></div>
            <!--
                Navigation Bar:
                    1) Name and tagline (Jonathan Cavaliere | Creative Dev. |) (Left Side of Screen)
                        - Name is in Blue and has larger font #28aaee
                        - Creative Dev. is in gray            #999997
                    2) Navigation links to other pages (Right Side of Screen)
                        - Active Link is highlighted in blue #28aaee
                        - All other links and '|' grayed out #999997
            -->
                <nav class=\"navbar\">
                    <div class =\"nav_bar_left\">Jonathan Cavaliere&nbsp;|&nbsp;<span id=\"creative_dev\">Creative Dev.</span>&nbsp;|</div>
                    <a href=\"#\" class=\"toggle_menu\">
                        <span class=\"line\"></span>
                        <span class=\"line\"></span>
                        <span class=\"line\"></span>
                    </a>
                    <div class =\"nav_bar_right\">
                        <ul>
                            <li><a href = \"index.html\">Home</a> </li>
                            <li><a href = \"about-me.html\">About</a> </li>
                            <li><a href = \"portfolio.html\">Past Work</a> </li>
                            <li><a href = \"education.html\">Education</a> </li>
                            <li class=\"last_link active_page\"><a href = \"#\">Contact</a> </li>
                        </ul>
                    </div>    
                </nav>
        </header>
           
        <div>
            <img id=\"banner_img\" src = \"../../images/banner_contact.png\" alt=\"Banner image\">
        </div>

        <section class=\"contact_form\">
            <h2>Contact Form</h2>
            <p id=\"contact_footnote\">Please complete captcha</p>
            <form 
                name= \"contact_form\"
                action=\"../../scripts/php/contact.php\"
                method=\"POST\">
                <label for=\"reason\" class=\"required_field\">Reason</label>
                <input type=\"text\" id=\"reason\" name=\"reason\" placeholder=\"Reason for contacting...\" required>
                <br>
          
                <label for=\"message\" class=\"required_field\">Message</label>
                <textarea id=\"message\" name=\"message\" placeholder=\"...\" style=\"height:200px\" required></textarea>
          
                <br>
                <br>

                <label for=\"email\" class=\"required_field\">Email</label>
                <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your email address...\" required>

                <br>
                <br>

                <label for=\"phone\">Phone Number</label>
                <input type=\"text\" id=\"phone\" name=\"phone\" placeholder=\"Your phone number...\">

                <br>
                <p id=\"contact_footnote\">denotes a required field</p>
                <br>
                <div id = \"contact_bottom_row\">
                    <input type=\"reset\" value=\"Clear\" class=\"form_button\">
                    <div class=\"g-recaptcha brochure__form__captcha\" data-sitekey=\"6Lcy5zMkAAAAAEKUsRLHhlk_I8UNes2-KJhdoBy_\"></div>
                    <input type=\"submit\" value=\"Send\" class=\"form_button\">
                </div>
            </form>
        </section> 
        
    </body>
</html>";

function reCaptcha($recaptcha){
    $secret = "6Lcy5zMkAAAAAKAq81mzux3Q6iz_O9XHeoQm-Ydo";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
}

if($_POST) {
    
    $reason = "";

    $visitor_email = "";
    $visitor_phone = "";
    $visitor_message = "";
    $email_body = "<div>";

    $recaptcha = $_POST['g-recaptcha-response'];
    $res = reCaptcha($recaptcha);
    if($res['success']){
        if(isset($_POST['reason'])) {

            $reason = filter_var($_POST['reason'], FILTER_SANITIZE_STRING);
    
            $email_body .= "<div><label><b>Visitor Reason:</b></label>&nbsp;<span>".$reason."</span></div>";
        }
    
        if(isset($_POST['email'])) {
    
            $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    
            $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    
            $email_body .= "<div><label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span></div>";
    
        }
    
        if(isset($_POST['phone'])) {
    
            $visitor_phone = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['phone']);
    
            $email_body .= "<div><label><b>Visitor Phone</b></label>&nbsp;<span>".$visitor_phone."</span></div>";
    
        }
    
        if(isset($_POST['message'])) {
    
            $visitor_message = htmlspecialchars($_POST['message']);
    
            $email_body .= "<div><label><b>Visitor Message:</b></label><div>".$visitor_message."</div></div>";
    
        }
    
    
        $recipient = "cavalierejon@gmail.com";
    
        $email_body .= "</div>";
    
        $headers  = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=utf-8' . "\r\n" . 'From: ' . '
        jon@cavaliere.codes' . "\r\n";
    
        if(mail($recipient, $reason, $email_body, $headers)) {
    
            echo $response_success;
    
        } else {
    
            echo "<p>Awe mannn.... something broke. Please email me at Cavalierejon@gmail.com
            </br> $recipient
            </br> $reason
            </br> $email_body
            </br> $headers</p>";
    
        }
    }else{
        echo $response_captcha;
    }

} else {
    echo '<p>Something went wrong</p>';
}
?>
