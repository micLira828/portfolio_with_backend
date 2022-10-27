from rest_framework import routers
from .views import WebsiteViewSet
from .views import AnimationViewSet
from .views import DesignViewSet

router = routers.DefaultRouter()
router.register(r'api/websites',WebsiteViewSet, 'websites')
router.register(r'api/animations',AnimationViewSet, 'animations')
router.register(r'api/designs',DesignViewSet, 'designs')

urlpatterns = router.urls