from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class RegistroComponent:

    @staticmethod
    def Register(p_login, p_password, p_nombre, p_apellido, p_facultad, p_carrera, p_state):
        try:
            result = False
            data = None
            message = None

            # Verificar si el login ya existe
            check_sql = "SELECT COUNT(*) AS valor FROM public.Users WHERE user_login = %s"
            check_record = (p_login,)
            check_result = DataBaseHandle.getRecords(check_sql, 1, check_record)

            if check_result['result']:
                if check_result['data']['valor'] > 0:
                    message = 'Login ya existe'
                else:
                    # Insertar nuevo usuario
                    insert_sql = """
                    INSERT INTO public.Users (user_login, user_password, user_nombre, user_apellido, user_facultad, user_carrera, user_state)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    """
                    insert_record = (p_login, p_password, p_nombre, p_apellido, p_facultad, p_carrera, p_state)
                    insert_result = DataBaseHandle.ExecuteNonQuery(insert_sql, insert_record)

                    if insert_result['result']:
                        result = True
                        message = 'Registro exitoso'
                        data = {'user_id': insert_result['data']}  # `data` contiene el ID del nuevo usuario
                    else:
                        message = insert_result['message']
            else:
                message = check_result['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = str(err)
        finally:
            return internal_response(result, data, message)
