// Firestore schema
const userSchema = {
  email: String,
  hashedPassword: String,
  hasAccessToCourse: { type: Boolean, default: false },
};

const courseSchema = {
  name: String,
  description: String,
  seatsAvailable: Number,
};

const subscriptionSchema = {
  email: String,
};

const contactSchema = {
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  reason: String,
  message: String,
};

const courseRegistrationSchema = {
  userEmail: String,
  courseId: String,
  upiId: String,
};

export {
  userSchema,
  courseSchema,
  subscriptionSchema,
  contactSchema,
  courseRegistrationSchema,
};
