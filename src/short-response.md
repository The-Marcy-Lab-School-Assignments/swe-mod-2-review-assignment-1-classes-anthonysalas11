# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. **composition** a `car` has an `engine`, an engine is part of a car not a type of car.
2. **inheritance** a `dog` is a type of `animal`
3. **composition** a `classroom` has many `students` , a student is not a type of classroom
4. **inheritance** a `rectangle` is a type of `shape`
5. **composition** a `CPU` is part of a `computer` not a type of computer
6. **inheritance** a `manager` is a type of `employee`

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

**Polymorphism** means that different classes can share the same method name but each implement it in their own unique way.In the example above it is useful because you can write code that works on any `mediaItem`, we do not need to know if it is a `song` , `podcast` or `audiobook`.Then when you call `play()` each class handles it appropriately.Adding a new media type only requires defining it's own `play()` method and we won't have to change any existing logic.

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) An instance property belongs to an object created from a class. Each instance would have it's own copy.A static property belongs to the class itself and is shared across all instances.It exist independently from any object.

b) A static property is useful for tracking data that applies to a class as a whole instead of any single instance.An example of this could be if `mediaItem` had a static property `mediaItem.count` that increments each time a new media item is created, giving a total across all instances instead of tracking data about one specific item.
