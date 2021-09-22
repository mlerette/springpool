package springpool.heroku.herokuwebapppostgressql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "visitors")  
public class Visitor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	
	private long id; 
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "message")
	private String message;

	@Column(name = "likes")
	private int likes;
	
	public Visitor() {
		super();
		// to do auto generate code
	}
	
	
	public Visitor(String firstName, String lastName, String message, int likes) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.message = message;
		this.likes = likes;
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	} 
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}

}
