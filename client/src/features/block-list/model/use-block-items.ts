import { useState } from "react";
import { useBlockListQuery } from "@/entities/block-list";
import { useDebauncedValue } from "@/shared/lib/react-std";

export function useBlockItems() {
  const [q, setQ] = useState("");
  const blockListQuery = useBlockListQuery({ q: useDebauncedValue(q, 500) });
  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
}
