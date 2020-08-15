# 

<pre><code>interface Vehicle {
  int set_num_of_wheels()
  int set_num_of_passengers()
  boolean has_gas()
}</code></pre>

<p>Abstract Factory Pattern has been used on the above interaface. It provides an interface to create families of related/dependent objects without specifying concrete class.</p>

##### a) Explain how can you use the pattern to create car and plane class?
<pre><code>
  interface Vehicle {
    int set_num_of_wheels()
    int set_num_of_passengers()
    boolean has_gas()
  }

  class Car implements Vehicle
    int set_num_of_wheels()
        return 4
    int set_num_of_passengers()
        return 5
    boolean has_gas()
        return true

  class Plane implements Vehicle
    int set_num_of_wheels()
      return 6
    int set_num_of_passengers()
      return 110
    boolean has_gas()
      return false
    </code></pre>
    
