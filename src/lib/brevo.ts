interface BrevoErrorBody {
  message?: string;
  code?: string;
}

export class BrevoConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BrevoConfigError";
  }
}

export async function subscribeEmailToBrevoList(email: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    throw new BrevoConfigError("Brevo is not configured.");
  }

  const parsedListId = Number(listId);
  if (!Number.isInteger(parsedListId) || parsedListId <= 0) {
    throw new BrevoConfigError("BREVO_LIST_ID must be a positive integer.");
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [parsedListId],
      updateEnabled: true,
    }),
  });

  if (response.ok) {
    return;
  }

  let errorBody: BrevoErrorBody | null = null;
  try {
    errorBody = (await response.json()) as BrevoErrorBody;
  } catch {
    errorBody = null;
  }

  if (response.status === 400) {
    throw new Error(errorBody?.message ?? "Invalid email address.");
  }

  if (response.status === 401 || response.status === 403) {
    throw new BrevoConfigError("Brevo authentication failed.");
  }

  throw new Error(
    errorBody?.message ?? "Unable to subscribe right now. Please try again."
  );
}
