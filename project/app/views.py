from django.shortcuts import render
from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login  
# from django.contrib.auth.hashers import make_password
from django.http import HttpResponse
from django.contrib.auth import logout



# Create your views here.
def index(request):
    return render(request,"index.html")


def signup(request):
    return render(request,"signup.html")


def about(request):
    return render(request,"about.html")

def succes(request):
    return render(request,"succes.html")

def card(request):
    return render(request,"card.html")

def service(request):
    return render(request,"service.html")

def student(request):
    return render(request,"student.html")

def jobseeker(request):
    return render(request,"jobseeker.html")


def signup1(request):
    if request.method == "POST":
        username = request.POST.get('name1')
        email = request.POST.get('email1')
        password = request.POST.get('password1')      
                		
        user = User.objects.create_user(username=username, email=email,password=password)
        user.save()
        return render(request, 'succes.html')
    

    
    return render(request, 'signup.html')

        