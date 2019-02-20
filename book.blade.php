<form method="post" action="{{route('book.store')}}">
    @csrf
    Title:<input type="text" name="title"/><br>
    Body: <input type="text" name="body"/><br>
          <button type="submit">Add</button>
</form>