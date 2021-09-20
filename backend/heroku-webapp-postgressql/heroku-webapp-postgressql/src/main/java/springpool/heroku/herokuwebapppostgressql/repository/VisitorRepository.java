package springpool.heroku.herokuwebapppostgressql.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springpool.heroku.herokuwebapppostgressql.model.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long > {

}
