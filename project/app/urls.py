from django.urls import path
from . import views 
urlpatterns = [
    path('',views.index,name='index'),
    path('signup/',views.signup,name='signup'),
    # path('signup/',views.signup,name='signup'),
    # path('login/',views.login,name='login'),
    path('about/',views.about,name='about'),
    path('succes/',views.succes,name='succes'),
    path('card/',views.card,name='card'),
    path('service/',views.service,name='service'),
    path('student',views.student,name='student'),
    path('jobseeker',views.jobseeker,name='jobseeker'),
]