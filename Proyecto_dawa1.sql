PGDMP      
                |            proyecto_dawa    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16513    proyecto_dawa    DATABASE     �   CREATE DATABASE proyecto_dawa WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE proyecto_dawa;
                postgres    false                        2615    16514    dawa    SCHEMA        CREATE SCHEMA dawa;
    DROP SCHEMA dawa;
                postgres    false            �            1259    16526    posts    TABLE     ~   CREATE TABLE public.posts (
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    content character varying(300)
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    16525    posts_post_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.posts_post_id_seq;
       public          postgres    false    219            �           0    0    posts_post_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.posts_post_id_seq OWNED BY public.posts.post_id;
          public          postgres    false    218            �            1259    16516    users    TABLE     �  CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_login character varying(50) NOT NULL,
    user_password character varying(255) NOT NULL,
    user_nombre character varying(100) NOT NULL,
    user_apellido character varying(100) NOT NULL,
    user_facultad character varying(100) NOT NULL,
    user_carrera character varying(100) NOT NULL,
    user_state boolean DEFAULT true NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16515    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    217            �           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    216            X           2604    16529    posts post_id    DEFAULT     n   ALTER TABLE ONLY public.posts ALTER COLUMN post_id SET DEFAULT nextval('public.posts_post_id_seq'::regclass);
 <   ALTER TABLE public.posts ALTER COLUMN post_id DROP DEFAULT;
       public          postgres    false    218    219    219            V           2604    16519    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    216    217    217            �          0    16526    posts 
   TABLE DATA           :   COPY public.posts (post_id, user_id, content) FROM stdin;
    public          postgres    false    219   N       �          0    16516    users 
   TABLE DATA           �   COPY public.users (user_id, user_login, user_password, user_nombre, user_apellido, user_facultad, user_carrera, user_state) FROM stdin;
    public          postgres    false    217   t       �           0    0    posts_post_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.posts_post_id_seq', 1, true);
          public          postgres    false    218            �           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);
          public          postgres    false    216            \           2606    16531    posts posts_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    219            Z           2606    16524    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            ]           2606    16532    posts posts_user_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public          postgres    false    219    217    4698            �      x�3�4����I����� ��      �   �   x�M�K
�0E�7��
���\�G�:y$Oy`I"Rw���l�T:���k@։GӮ7��3Hʑl��bG��<����%}��OSa�}�R�8�{�X&��C��EFV-N��إ��ѥ���&,��]VJ�/O�:!     