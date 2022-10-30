#from django.http import HttpResponse
from django.shortcuts import render
#from rest_framework.decorators import api_view

def index(request):
    return render(request, 'index.html')

'''@api_view(['GET', 'POST'])
def test_api(request):
    if request.method == 'GET':
        print ('GET REQUEST')
        return HttpResponse(status=213)
    elif request.method == 'POST':
        print (f'POST REQUEST {request.data}')
        return HttpResponse(status=213)'''
    
