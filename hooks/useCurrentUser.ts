import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/elysia/lib/apiClient";

const CACHE_KEY_CURRENT_USER = "currentUser";
const CACHE_DURATION_MS = 1000 * 60 * 5; // 5 minutes

export function useCurrentUser() {
  return useQuery({
    queryKey: [CACHE_KEY_CURRENT_USER],
    queryFn: async () => {
      const res = await apiClient.auth.me.get();
      const data = res.data as {
        user: { id: number; username: string; email: string; roleId: number };
      };
      return data.user;
    },
    staleTime: CACHE_DURATION_MS,
    retry: 1,
  });
}
