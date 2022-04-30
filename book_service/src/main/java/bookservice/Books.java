package bookservice;

import java.util.ArrayList;
import java.util.List;

public class Books {
	private static ArrayList<Book> books = new ArrayList<>();
	static {
		books.add(new Book(1, "The Outliers", 500));
		books.add(new Book(2, "World Is Flat", 550));
	}
	public static List<Book> getBooks() {
		return books;
	}
	
	public static void addBook(Book newbook) {
		Book firstBook = books.get(0);
		int max = 1;
		if (firstBook != null) {
			max = firstBook.getId();
			
			for (Book book : books) {
				if (book.getId() >= max) {
					max = book.getId();
				}
			}
			
		}
		newbook.setId(max);
		books.add(newbook);
	}

	public static void removeBook(int id) {
		for (Book book : books) {
			if (book.getId() == id) {
				books.remove(book);
			}
		}
	}
}