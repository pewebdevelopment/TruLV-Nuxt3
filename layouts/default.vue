<template>
    <div>
        
    

        <!-- ==========Header Section Starts Here========== -->
        <header class="header-section">
            <div class="header-top">
                <div class="container mx-auto sm:px-4">
                    <div class="header-top-area">
                        <ul class="left">
                            <li>
                                <i class="icofont-ui-call"></i> <span>+800-123-4567 6587</span>
                            </li>
                            <li>
                                <i class="icofont-location-pin"></i> Beverley, New York 224 USA
                            </li>
                        </ul>
                        <ul class="social-icons flex items-center">
                            <li>
                                <p>
                                    Find us on :
                                </p>
                            </li>
                            <li>
                              <NuxtLink to="/fb" class="fb"><i class="icofont-facebook-messenger"></i></NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/twitter" class="twitter"><i class="icofont-twitter"></i></NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/vimeo" class="vimeo"><i class="icofont-vimeo"></i></NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/skype" class="skype"><i class="icofont-skype"></i></NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/fb" class="rss"><i class="icofont-rss-feed"></i></NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container mx-auto sm:px-4">
                    <div class="header-wrapper">
                        <div class="logo">
                            <NuxtLink to="/"><img src="../assets/images/logo/logo.png" alt="logo"></NuxtLink>
                        </div>
                        <div class="menu-area">
                            <ul class="menu">
                                <li>
                                    <NuxtLink to="/">Home</NuxtLink>
                                </li>
    
                                <li>
                                    <NuxtLink to="/features">Features</NuxtLink>
                                    <ul class="submenu">
                                        <li><NuxtLink to="/members">All Members</NuxtLink></li>
                                        <li><NuxtLink to="/profile">Member Profile</NuxtLink></li>
                                        <li><NuxtLink to="/login">Login</NuxtLink></li>
                                        <li><NuxtLink to="/signup">Sign Up</NuxtLink></li>
                                        <li><NuxtLink to="/pricing-plan">Pricing-Plan</NuxtLink></li>
                                    </ul>
                                </li>
                                <li>
                                  <NuxtLink to="/active-group">Comunity</NuxtLink>
                                </li>
                                <li>
                                  <NuxtLink to="/Blog">Blog</NuxtLink>
                                    <ul class="submenu">
                                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                                        <li><NuxtLink to="/blog-single">Blog-Single</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                            </ul>
                            <NuxtLink to="/login" class="login"><i class="icofont-user"></i> <span>LOG IN</span></NuxtLink>
                            <NuxtLink to="/signup" class="signup"><i class="icofont-users"></i> <span>SIGN UP</span></NuxtLink>
    
                            <!-- toggle icons -->
                            <div class="header-bar lg:hidden">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="ellepsis-bar lg:hidden">
                                <i class="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       <!-- ==========Header Section Ends Here========== -->
       <div>
        <slot />
       </div>

        <!-- ================ footer Section start Here =============== -->
        <footer class="footer-section">
        <div class="footer-top">
            <div class="container mx-auto sm:px-4">
                <div class="flex flex-wrap  g-3 justify-center g-lg-0">
                    <div class="lg:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/footer/icons/01.png" alt="Phone-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Phone Number : +880123 456 789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/footer/icons/02.png" alt="email-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Email : admin@turulav.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-top-item lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/footer/icons/03.png" alt="location-icon">
                                </div>
                                <div class="lab-content">
                                    <span>Address:30 North West New York 240</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-middle padding-tb" style="background-image: url(assets/images/footer/bg.png);">
            <div class="container mx-auto sm:px-4">
                <div class="flex flex-wrap ">
                    <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-middle-item-wrapper">
                            <div class="footer-middle-item lg:mb-0">
                                <div class="fm-item-title">
                                    <h4>About TuruLav</h4>
                                </div>
                                <div class="fm-item-content">
                                    <p class="mb-4">Energistically coordinate highly efficient procesr
                                        partnerships befor revolutionar growth strategie
                                        improvement viaing awesome</p>
                                    <img src="../assets/images/footer/about.jpg" alt="about-image" class="footer-abt-img">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-middle-item-wrapper">
                            <div class="footer-middle-item lg:mb-0">
                                <div class="fm-item-title">
                                    <h4>our Recent news</h4>
                                </div>
                                <div class="fm-item-content">
                                    <div class="fm-item-widget lab-item">
                                        <div class="lab-inner">
                                            <div class="lab-thumb">
                                                <a href="#"> <img src="../assets/images/footer/01.jpg"
                                                        alt="footer-widget-img"></a>
                                            </div>
                                            <div class="lab-content">
                                                <h6><a href="blog-single.html">Enable Seamin Matera Forin And Our
                                                        Orthonal Create Vortals.</a></h6>
                                                <p>July 23, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fm-item-widget lab-item">
                                        <div class="lab-inner">
                                            <div class="lab-thumb">
                                                <a href="#"><img src="../assets/images/footer/02.jpg"
                                                        alt="footer-widget-img"></a>
                                            </div>
                                            <div class="lab-content">
                                                <h6><a href="blog-single.html">Dynamca Network Otuitive Catays For
                                                        Plagiarize Mindshare After</a></h6>
                                                <p>July 23, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fm-item-widget lab-item">
                                        <div class="lab-inner">
                                            <div class="lab-thumb">
                                                <a href="#"><img src="../assets/images/footer/03.jpg"
                                                        alt="footer-widget-img"></a>
                                            </div>
                                            <div class="lab-content">
                                                <h6><a href="blog-single.html">Dynamca Network Otuitive Catays For
                                                        Plagiarize Mindshare After</a></h6>
                                                <p>July 23, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full">
                        <div class="footer-middle-item-wrapper">
                            <div class="footer-middle-item-3 lg:mb-0">
                                <div class="fm-item-title">
                                    <h4>Our Newsletter Signup</h4>
                                </div>
                                <div class="fm-item-content">
                                    <p>By subscribing to our mailing list you will always
                                        be update with the latest news from us.</p>
                                    <form>
                                        <div class="mb-4">
                                            <input type="email" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Enter email">
                                        </div>
                                        <button type="submit" class="lab-btn">Send Massage <i
                                                class="icofont-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container mx-auto sm:px-4">
                <div class="flex flex-wrap ">
                    <div class="w-full">
                        <div class="footer-bottom-content text-center">
                            <p>&copy; 2022 <a href="index.html">TuruLav</a> -Best For Dating HTML Template.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ================ footer Section end Here =============== -->
       
    </div>
</template>

<script>

</script>

<style>

</style>