<template>
    <section>
   <!-- ==========Page Header Section Start Here========== -->
   <section class="page-header-section style-1 bg-pink">
        <div class="container mx-auto sm:px-4">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>TuruLav Login</h2>
                    </div>
                    <ol class="page-title">
                        <li><NuxtLink to="/" class="font-bold">Home - <span class="font-normal">Login</span></NuxtLink></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- ==========Page Header Section Ends Here========== -->

    <!-- ==========login Section start Here========== -->
    <div class="login-section padding-tb bg-ash">
        <div class=" container mx-auto sm:px-4">
            <div class="account-wrapper">
                <h3 class="title">Login</h3>
                <form class="account-form">
                    <div class="form-group">
                        <input type="text" placeholder="User Name" name="username">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div class="checkgroup">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember Me</label>
                            </div>
                            <NuxtLink to="">Forget Password?</NuxtLink>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="d-block lab-btn"><span>Submit Now</span></button>
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
    <!-- ==========Login Section ends Here========== -->
</section>
</template>

<script>

</script>

<style>

</style>