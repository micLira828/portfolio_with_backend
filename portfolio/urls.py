from django.urls import include, path
from rest_framework import routers
from . import views
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register(r'website', views.WebsiteViewSet)
router.register(r'design', views.DesignViewSet)
router.register(r'animation', views.AnimationViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]
