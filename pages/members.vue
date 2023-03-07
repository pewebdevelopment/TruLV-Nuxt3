<template>
  <section>

         <!-- ==========Page Header Section Start Here========== -->
         <section class="page-header-section style-1 bg-pink">
        <div class="container mx-auto sm:px-4">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>TuruLav Dating Members</h2>
                    </div>
                    <ol class="page-title">
                        <li><NuxtLink to="/" class="font-bold">Home - <span class="font-normal">Members</span></NuxtLink></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- ==========Page Header Section Ends Here========== -->
        <!-- ==========Member page Section Start Here========== -->
        <section class="member-page-section ">
        <div class="container mx-auto sm:px-4">
            <div class="member-filter">
                <div class="member-filter-inner">
                    <form action="/" class="filter-form">
                        <div class="gender">
                            <div class="custom-select right w-full">
                                <select name="gender" id="gender" class="">
                                    <option value="0">I am a </option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="person">
                            <div class="custom-select right w-full">
                                <select name="gender" id="gender-two" class="">
                                    <option value="0">Looking for</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="age">
                            <div class="right flex justify-between w-full">
                                <div class="custom-select">
                                    <select name="age-start" id="age">
                                        <option value="1">18</option>
                                        <option value="2">19</option>
                                        <option value="3">20</option>
                                        <option value="4">21</option>
                                        <option value="5">22</option>
                                        <option value="6">23</option>
                                        <option value="7">24</option>
                                        <option value="8">25</option>
                                        <option value="9">26</option>
                                        <option value="10">27</option>
                                        <option value="11">28</option>
                                        <option value="13">29</option>
                                        <option value="14">30</option>
                                    </select>
                                </div>

                                <div class="custom-select">
                                    <select name="age-end" id="age-two">
                                        <option value="1">36</option>
                                        <option value="2">19</option>
                                        <option value="3">20</option>
                                        <option value="4">21</option>
                                        <option value="5">22</option>
                                        <option value="6">23</option>
                                        <option value="7">24</option>
                                        <option value="8">25</option>
                                        <option value="9">26</option>
                                        <option value="10">27</option>
                                        <option value="11">28</option>
                                        <option value="13">29</option>
                                        <option value="14">30</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="city">
                            <div class="custom-select right w-full">
                                <select name="country" id="country" class="">
                                    <option value="0">Choose Your Country
                                    </option>
                                    <option value="1">USA</option>
                                    <option value="2">UK</option>
                                    <option value="3">Spain</option>
                                    <option value="4">Brazil</option>
                                    <option value="5">France</option>
                                    <option value="6">Newzeland</option>
                                    <option value="7">Australia</option>
                                    <option value="8">Bangladesh</option>
                                    <option value="9">Turki</option>
                                    <option value="10">Chine</option>
                                    <option value="11">India</option>
                                    <option value="12">Canada</option>
                                </select>
                            </div>
                        </div>
                        <button class="lab-btn" type="submit">Search now <i class="icofont-search-2"></i></button>
                    </form>
                </div>
            </div>
            <div class="member-wrapper">
                <ul class="member-info mb-4">
                    <li class="all-member">
                        <p>All Members </p>
                        <p>20 365 587</p>
                    </li>
                    <li class="member-cat">
                        <div class="custom-select right w-full">
                            <select name="member" id="member-cat" class="">
                                <option value="0">Newest Registerd</option>
                                <option value="1">Oldest</option>
                                <option value="2">Popular</option>
                                <option value="3">Most Active</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <div class="flex flex-wrap g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-center">
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/01.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Tenma Shyna</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/02.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Maya Statham</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/03.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Cristina Maria</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/04.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Gaurav-Singh</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/05.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Gihan-Fernando</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/06.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/07.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Sweet Admin</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/08.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Gyan-Baffour</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/09.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Zeahra Maria</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/10.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/11.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/12.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/13.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/14.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/15.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/16.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/17.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/18.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/19.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                        <div class="lab-item member-item style-1 style-2">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="../assets/images/member/20.jpg" alt="member-img">
                                </div>
                                <div class="lab-content">
                                    <h6><NuxtLink to='/profile'>Andrea Guido</NuxtLink> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paginations">
                    <ul class="lab-ul flex flex-wrap justify-center mb-1">
                        <li>
                            <NuxtLink to=''><i class="icofont-rounded-double-left"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to=''>1</NuxtLink>
                        </li>
                        <li class="hidden sm:block">
                            <NuxtLink to=''>2</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to=''>...</NuxtLink>
                        </li>
                        <li class="hidden sm:block">
                            <NuxtLink to=''>4</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to=''>5</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to=''><i class="icofont-rounded-double-right"></i></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- ==========Member page Section Ends Here========== -->

    <!-- ================ App Section start Here =============== -->
    <section class="app-section bg-pink">
        <div class="container mx-auto sm:px-4">
            <div class="section-wrapper padding-tb">
                <div class="app-content">
                    <h4>Download App Our Turulav</h4>
                    <h2>Easy Connect to Everyone</h2>
                    <p>You find us, finally, and you are already in love. More than 5.000.000 around
                        the world already shared the same experience andng ares uses our system
                        Joining us today just got easier!</p>
                    <ul class="app-download flex flex-wrap">
                        <li><a href="#" class="flex flex-wrap items-center">
                                <div class="app-thumb">
                                    <img src="../assets/images/app/apple.png" alt="apple">
                                </div>
                                <div class="app-content">
                                    <p>Available on the</p>
                                    <h4>App Store</h4>
                                </div>
                            </a></li>
                        <li class="inline-block"><a href="#" class="flex flex-wrap items-center">
                                <div class="app-thumb">
                                    <img src="../assets/images/app/playstore.png" alt="playstore">
                                </div>
                                <div class="app-content">
                                    <p>Available on the</p>
                                    <h4>Google Play</h4>
                                </div>
                            </a></li>
                    </ul>

                </div>
                <div class="mobile-app">
                    <img src="../assets/images/app/mobile-view.png" alt="mbl-view">
                </div>
            </div>
        </div>
    </section>
    <!-- ================ App Section end Here =============== -->

  </section>
</template>

<script>

</script>

<style>

</style>