<template>
  <div >
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          ToDo
        </a>
        <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/completa">Completas</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-9">
        <router-view class="view"></router-view>
      </div>
    </div>
  </div>
</template>
