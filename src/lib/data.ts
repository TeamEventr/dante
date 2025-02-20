export const Months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const categories = [ "Party", "Concert", "Fest", "Comedy" ]

export const dummyEvent =
{
    "event": {
      "id": "550e8400-e29b-41d4-a716-446655440000",     //✅
      "title": "Tech Conference 2025",      //✅
      "host_id": "5d5b5f16-3f9e-4b5a-9016-6f2d8d9caa22",        //✅
      "blurb": "Join us for an insightful event on emerging tech trends!",
      "description": "A full-day event featuring keynotes, networking sessions, and workshops. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc. Sit amet consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc. Sit amet consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.",
      "category": "Technology",        //✅
      "cover_picture_url": "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      "banner_url": "https://example.com/banner.jpg",
      "thumbnail_url": "https://example.com/thumbnail.jpg",
      "visibility": "public",
      "tags": ["Fest", "New York", "2025"],
      "venue": "Convention Center, New York",
      "schedule": "multiple_days",
      "start_time": "2025-03-03T08:00:00Z",
      "end_time": "2025-03-04T18:00:00Z",
      "age_limit": 18,
      "created_at": "2025-02-10T12:00:00Z",
      "updated_at": "2025-02-11T10:30:00Z",
      "deleted_at": null
    },
    "price_tiers": [
      {
        "id": 1,
        "event_id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "General Admission",
        "validity_start": "2025-02-15T00:00:00Z",
        "validity_end": "2025-03-02T23:59:59Z",
        "price": 50,
        "seat_available": 34,
        "total_seat": 100,
        "booking_open_time": "2025-02-10T08:00:00Z",
        "booking_close_time": "2025-03-02T23:59:59Z",
        "booking_status": "open"
      },
      {
        "id": 2,
        "event_id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "VIP Pass",
        "validity_start": "2025-02-15T00:00:00Z",
        "validity_end": "2025-03-02T23:59:59Z",
        "price": 150,
        "seat_available": 12,
        "total_seat": 50,
        "booking_open_time": "2025-02-10T08:00:00Z",
        "booking_close_time": "2025-03-02T23:59:59Z",
        "booking_status": "open"
      }
    ],
    "volunteers": [
      {
        "id": "vol-001",
        "username": "johndoe",
        "event_id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "John Doe",
        "created_at": "2025-02-12T14:30:00Z",
        "updated_at": "2025-02-12T14:30:00Z",
        "shift_start": "2025-03-03T07:00:00Z",
        "shift_end": "2025-03-03T18:00:00Z",
        "removed": false
      },
      {
        "id": "vol-002",
        "username": "janedoe",
        "event_id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "Jane Doe",
        "created_at": "2025-02-12T14:30:00Z",
        "updated_at": "2025-02-12T14:30:00Z",
        "shift_start": "2025-03-04T07:00:00Z",
        "shift_end": "2025-03-04T18:00:00Z",
        "removed": false
      }
    ],
    "statistics": {
        "male": 28,
        "female": 18,
        "3-18": 2,
        "18-24": 18,
        "25-34": 16,
        "35-50": 6,
        "50-80": 4,
    }
  }
  
  export const dummyEvent2 = {
    categories: ["Party", "Concert", "Fest", "Comedy", "Technology", "Workshop"],
    event: {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Tech Conference 2025",
      host_id: "5d5b5f16-3f9e-4b5a-9016-6f2d8d9caa22",
      blurb: "Join us for an insightful event on emerging tech trends!",
      description:
        "A full-day event featuring keynotes, networking sessions, and workshops. Lorem ipsum dolor sit amet.",
      category: "Technology",
      cover_picture_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      banner_url: "https://example.com/banner.jpg",
      thumbnail_url: "https://example.com/thumbnail.jpg",
      visibility: "public",
      tags: ["Tech", "New York", "2025"],
      venue: "Convention Center, New York",
      schedule: "multiple_days",
      start_time: "2025-03-03T08:00:00Z",
      end_time: "2025-03-04T18:00:00Z",
      age_limit: 18,
      created_at: "2025-02-10T12:00:00Z",
      updated_at: "2025-02-11T10:30:00Z",
      deleted_at: null,
    },
  };
  