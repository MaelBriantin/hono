export class NotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }

  static response(message?: string): Response {
    return Response.json(
      {
        "error": message || "Not Found",
      },
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
    });
  }
}

export class InvalidArgumentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidArgumentError";
  }

  static response(message?: string): Response {
    return Response.json(
      {
        "error": message || "Invalid Argument",
      },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
    });
  }
}

export class InternalServerException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InternalServerError";
  }
  static response(message?: string): Response {
    return Response.json(
      {
        "error": message || "Internal Server Error",
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
    });
  }
}