from ..Services.login_service import LoginService
from ..Services.registro_service import RegistroService
from ..Services.user_service import UserService
from ..Services.publicaciones_services import PublicacionService
from ..Services.posts_service import PublicacionListService

def load_routes(api):
    # Método para el login
    api.add_resource(LoginService, '/security/login')
    # Método para el registro de usuarios
    api.add_resource(RegistroService, '/user/register')  # Nueva ruta para el registro
    # Método para listar los usuarios
    api.add_resource(UserService, '/user/list')
    # Método para crear publicaciones
    api.add_resource(PublicacionService, '/security/publicacion')
    # Método para listar las publicaciones
    api.add_resource(PublicacionListService, '/publicaciones/list')