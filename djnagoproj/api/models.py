from django.db import models
from django.contrib.auth.models import AbstractBaseUser, User, BaseUserManager, PermissionsMixin, Permission,Group


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    

    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='custom_users_permissions'
    )

    groups = models.ManyToManyField(
        Group,
        blank=True,
        related_name='custom_users_groups'
    )
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email


class flight_search(models.Model):
    date = models.DateTimeField()
    origin = models.CharField(max_length=200)
    origin_id = models.IntegerField
    dest = models.CharField(max_length=200)
    dest_id = models.IntegerField
    prf_class = models.CharField(max_length=200)


class flight(models.Model):
    flight_id = models.IntegerField(primary_key=True)
    origin_name = models.CharField(max_length=200)
    dest_name = models.CharField(max_length=200)
    start = models.TimeField()
    end = models.TimeField()
    Eco_fair = models.IntegerField()
    first_fair = models.IntegerField()
    busi_fair = models.IntegerField()
    date = models.DateField()
    airline = models.CharField(max_length=200)


class flight_seat(models.Model):
    flight = models.ForeignKey(flight, on_delete=models.CASCADE)
    seats_no = []

    def __str__(self):
        return self.flight.flight_id

    def add_to_list(self, value):
        self.seats_no.append(value)


class seat(models.Model):
    flight = models.ForeignKey(flight, on_delete=models.CASCADE)
    Econo = models.IntegerField()
    Bussi = models.IntegerField()
    First = models.IntegerField()
    Econo_price = models.IntegerField()
    Bussi_price = models.IntegerField()
    First_price = models.IntegerField()
    T_Econo = models.IntegerField()
    T_Bussi = models.IntegerField()
    T_First = models.IntegerField()
    Income = models.IntegerField()


class Booking(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_age = models.IntegerField()
    Num_trav = models.IntegerField()
    traveller = []
    tra_age = []

    def add_traveller(self, traveller):
        self.traveller.append(traveller)

    def add_age(self, age):
        self.tra_age.append(age)


# -------------------------------------------------------------------------------------------------------------------------------------------------


# class Students(models.Model):
#     student_id =models.IntegerField(primary_key=True,default=1)
#     username = models.CharField(max_length=200)
#     email = models.CharField(max_length=200)
#     password = models.CharField(max_length=200)
#     # roll_number = models.IntegerField()
#     # mobile = models.CharField(max_length=10)

#     def __str__(self):
#         return self.username
