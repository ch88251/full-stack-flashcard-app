from flask.cli import FlaskGroup

from src import create_app, db
from src.api.users.models import User


app = create_app()
cli = FlaskGroup(create_app=create_app)


@cli.command('recreate_db')
def recreate_db():
  db.drop_all()
  db.create_all()
  db.session.commit()


@cli.command('seed_db')
def seed_db():
  db.session.add(User(username='jbeam', email="jim.beam@gmail.com"))
  db.session.add(User(username='jdaniels', email="jack.daniels@gmail.com"))
  db.session.commit()


if __name__ == '__main__':
    cli()
