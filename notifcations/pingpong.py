import turtle

# Create the screen
screen = turtle.Screen()
screen.title("Ping Pong")
screen.bgcolor("black")
screen.setup(width=800, height=600)

# Create the paddles
left_paddle = turtle.Turtle()
left_paddle.speed(0)
left_paddle.shape("square")
left_paddle.color("red")
left_paddle.shapesize(stretch_wid=5, stretch_len=1)
left_paddle.penup()
left_paddle.goto(-350, 0)

right_paddle = turtle.Turtle()
right_paddle.speed(0)
right_paddle.shape("square")
right_paddle.color("blue")
right_paddle.shapesize(stretch_wid=5, stretch_len=1)
right_paddle.penup()
right_paddle.goto(350, 0)

# Create the ball
ball = turtle.Turtle()
ball.speed(0)
ball.shape("circle")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.1
ball.dy = -0.1

# Move the paddles
def move_left_paddle_up():
  y = left_paddle.ycor()
  y += 20
  left_paddle.sety(y)

def move_left_paddle_down():
  y = left_paddle.ycor()
  y -= 20
  left_paddle.sety(y)

def move_right_paddle_up():
  y = right_paddle.ycor()
  y += 20
  right_paddle.sety(y)

def move_right_paddle_down():
  y = right_paddle.ycor()
  y -= 20
  right_paddle.sety(y)

# Bind the keyboard keys to the paddle movement functions
screen.listen()
screen.onkey(move_left_paddle_up, "w")
screen.onkey(move_left_paddle_down, "s")
screen.onkey(move_right_paddle_up, "Up")
screen.onkey(move_right_paddle_down, "Down")

# Main game loop
while True:
  # Move the ball
  ball.setx(ball.xcor() + ball.dx)
  ball.sety(ball.ycor() + ball.dy)

  # Check for collisions with the paddles
  if ball.xcor() < -360:
    ball.dx = -ball.dx
  elif ball.xcor() > 360:
    ball.dx = -ball.dx

  if ball.ycor() < -200:
    ball.sety(200)
    ball.dy = -ball.dy
  elif ball.ycor() > 200:
    ball.sety(-200)
    ball.dy = -ball.dy

  # Check if the ball went out of bounds
  if ball.ycor() < -200 or ball.ycor() > 200:
    break

  # Update the screen
  screen.update()

# Display the winner
if ball.xcor() < -360:
  print("Player 1 wins!")
else:
  print("Player 2 wins!")
