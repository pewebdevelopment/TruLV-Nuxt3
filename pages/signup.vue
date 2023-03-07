<template>
<section>
      <!-- ==========Header Section Ends Here========== -->

    <!-- ==========Page Header Section Start Here========== -->
    <section class="page-header-section style-1 bg-pink">
        <div class="container mx-auto sm:px-4">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>TuruLav Registration</h2>
                    </div>
                    <ol class="page-title">
                        <li><NuxtLink to="/" class="font-bold">Home - <span class="font-normal">SignUp</span></NuxtLink></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- ==========Page Header Section Ends Here========== -->

    <!-- ==========Sign up Section start Here========== -->
    <div class="login-section padding-tb bg-ash">
        <div class=" container mx-auto sm:px-4">
            <div class="account-wrapper">
                <h3 class="title">Register Now</h3>
                <form class="account-form">
                    <div class="form-group">
                        <input type="text" placeholder="User Name" name="username">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Email" name="email">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Confirm Password" name="password">
                    </div>
                    <div class="form-group">
                        <button class="d-block lab-btn"><span>Get Started Now</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="block cate pt-10">Don’t Have any Account? <NuxtLink to="/signup"> Sign
                            Up</NuxtLink></span>
                    <span class="or"><span>or</span></span>
                    <h5 class="subtitle">Login With Social Media</h5>
                    <ul class="social-media social-color lab-ul flex justify-center">
                        <li>
                            <NuxtLink to="" class="facebook"><i class="icofont-facebook"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="" class="twitter"><i class="icofont-twitter"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="" class="linkedin"><i class="icofont-linkedin"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="" class="instagram"><i class="icofont-instagram"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="" class="pinterest"><i class="icofont-pinterest"></i></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- ==========Sign up Section ends Here========== -->
</section>

  </template>
  
  <script>
  
  </script>
  
  <style>
  
  </style>