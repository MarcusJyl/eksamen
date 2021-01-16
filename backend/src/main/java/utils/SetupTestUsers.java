package utils;



import entities.Book;
import entities.Role;
import entities.User;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class SetupTestUsers {

  public static void main(String[] args) {

    EntityManagerFactory emf = EMF_Creator.createEntityManagerFactory();
    EntityManager em = emf.createEntityManager();
    
    // IMPORTAAAAAAAAAANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This breaks one of the MOST fundamental security rules in that it ships with default users and passwords
    // CHANGE the three passwords below, before you uncomment and execute the code below
    // Also, either delete this file, when users are created or rename and add to .gitignore
    // Whatever you do DO NOT COMMIT and PUSH with the real passwords

    User user = new User("user", "test2");
    User admin = new User("admin", "test2");
    User both = new User("user_admin", "test2");
   
    Book bog1 = new Book("1234", "HArry Potter 1", "gwenyth palthrow","egmont", "1999");
    Book bog2 = new Book("183", "HArry Potter 2", "gwenyth palthrow", "egmont", "1212");
    Book bog3 = new Book("123", "HArry Potter 3", "gwenyth palthrow", "egmont", "1313");
    Book bog4 = new Book("12346", "HArry Potter 4", "gwenyth palthrow","egmont", "1234");
    

    if(admin.getUserPass().equals("test")||user.getUserPass().equals("test")||both.getUserPass().equals("test"))
      throw new UnsupportedOperationException("You have not changed the passwords");

    em.getTransaction().begin();

    
    
    Role userRole = new Role("user");
    Role adminRole = new Role("admin");
    
    
    user.addRole(userRole);
    admin.addRole(adminRole);
    both.addRole(userRole);
    both.addRole(adminRole);
   
    em.persist(userRole);
    em.persist(adminRole);
    em.persist(bog1);
    em.persist(bog2);
    em.persist(bog3);
    em.persist(bog4);
    em.persist(user);
    em.persist(admin);
    em.persist(both);
    em.getTransaction().commit();
    System.out.println("PW: " + user.getUserPass());
    System.out.println("Testing user with OK password: " + user.verifyPassword("test"));
    System.out.println("Testing user with wrong password: " + user.verifyPassword("test2"));
    System.out.println("Created TEST Users");
   
  }

}
