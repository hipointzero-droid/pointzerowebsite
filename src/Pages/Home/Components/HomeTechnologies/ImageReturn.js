import React from "react";
//APP
import android from "../../../../static/images/Mobile/android.png";
import ios from "../../../../static/images/Mobile/ios.png";
import flutter from "../../../../static/images/Mobile/flutter.png";
import reactnative from "../../../../static/images/Mobile/react_native.png";
import xamarin from "../../../../static/images/Mobile/xamarin.png";

//FRONTEND
import angular from "../../../../static/images/Frontend/angular.png";
import react from "../../../../static/images/Frontend/react.png";
import vue from "../../../../static/images/Frontend/vue.png";
import jquery from "../../../../static/images/Frontend/jquery.png";
import next from "../../../../static/images/Frontend/next.png";

//BACKEND
import node from "../../../../static/images/Backend/node.svg";
import asp from "../../../../static/images/Backend/asp_net.svg";
import django from "../../../../static/images/Backend/django.svg";
import laravel from "../../../../static/images/Backend/laravel.svg";
import spring_boot from "../../../../static/images/Backend/spring_boot.svg";

//CMS
import drupal from "../../../../static/images/CMS/drupal.svg";
import hubspot from "../../../../static/images/CMS/hubspot.svg";
import joomla from "../../../../static/images/CMS/joomla.svg";
import woocommerce from "../../../../static/images/CMS/woocommerce.svg";
import wordpress from "../../../../static/images/CMS/wordpress.svg";

//DATABASE
import mongodb from "../../../../static/images/Database/mongodb.svg";
import firebase from "../../../../static/images/Database/firebase.svg";
import mysql from "../../../../static/images/Database/mysql.svg";
import postgres from "../../../../static/images/Database/postgres.svg";
import redis from "../../../../static/images/Database/redis.svg";

//DEVOPS
import docker from "../../../../static/images/DevOps/docker.svg";
import aws from "../../../../static/images/DevOps/aws.svg";
import azure from "../../../../static/images/DevOps/azure.svg";
import google_cloud from "../../../../static/images/DevOps/google_cloud.svg";
import kubernetes from "../../../../static/images/DevOps/kubernetes.svg";

//DIGITAL MARKETING
import buffer from "../../../../static/images/DigitalMarketing/buffer.png";
import google_adwords from "../../../../static/images/DigitalMarketing/google_adwords.png";
import google_analytics from "../../../../static/images/DigitalMarketing/google_analytics.png";
import hootsuite from "../../../../static/images/DigitalMarketing/hootsuite.png";



import { BACKEND, CMS, DATABASE, DEVOPS, FRONTEND, MOBILE,DIGIAL_MARKETING } from "./constants";

const ImageReturn = (techtype, imagename) => {
  switch (techtype) {
    case MOBILE:
      switch (imagename) {
        case "android":
          return android;
        case "ios":
          return ios;
        case "flutter":
          return flutter;
        case "react_native":
          return reactnative;
        case "xamarin":
          return xamarin;
        default:
          return "";
      }
    case FRONTEND:
      switch (imagename) {
        case "angular":
          return angular;
        case "react":
          return react;
        case "jquery":
          return jquery;
        case "next":
          return next;
        case "vue":
          return vue;
        default:
          return "";
      }
    case BACKEND:
      switch (imagename) {
        case "django":
          return django;
        case "laravel":
          return laravel;
        case "node":
          return node;
        case "asp_net":
          return asp;
        case "spring_boot":
          return spring_boot;
        default:
          return "";
      }
    case CMS:
      switch (imagename) {
        case "drupal":
          return drupal;
        case "hubspot":
          return hubspot;
        case "joomla":
          return joomla;
        case "wordpress":
          return wordpress;
        case "woocommerce":
          return woocommerce;
        default:
          return "";
      }
    case DATABASE:
      switch (imagename) {
        case "mongodb":
          return mongodb;
        case "firebase":
          return firebase;
        case "mysql":
          return mysql;
        case "postgres":
          return postgres;
        case "redis":
          return redis;
        default:
          return "";
      }
    case DEVOPS:
      switch (imagename) {
        case "aws":
          return aws;
        case "azure":
          return azure;
        case "docker":
          return docker;
        case "kubernetes":
          return kubernetes;
        case "google_cloud":
          return google_cloud;
        default:
          return "";
      }
    case DIGIAL_MARKETING:

      switch(imagename)
      {
        case "hootsuite":
          return hootsuite;
        case "buffer":
          return buffer;
        case "google_adwords":
          return google_adwords;
        case "google_analytics":
          return google_analytics;
        


        default:
          return "";

      }
    default:
      return "";
  }
};

export default ImageReturn;
